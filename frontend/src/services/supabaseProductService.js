const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

function configError() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel and frontend/.env.");
  }
}

function headers(extra = {}) {
  configError();
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    ...extra,
  };
}

function mapProduct(row) {
  return {
    id: `supabase-${row.id}`,
    databaseId: Number(row.id),
    name: row.name,
    title: row.name,
    description: row.description || "",
    category: Number(row.category_id) === 1 ? "electronics" : "all",
    price: Number(row.price || 0),
    mrp: Number(row.price || 0),
    stock: Number(row.stock || 0),
    seller: "BSP CART",
    rating: 0,
    ratingCount: 0,
    image: row.image_url || "",
    imageUrl: row.image_url || "",
    images: row.image_url ? [row.image_url] : [],
    highlights: [],
    isSupabaseProduct: true,
  };
}

async function requestProducts(path) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/products${path}`, {
    headers: headers({ "Content-Type": "application/json" }),
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase products request failed (${response.status}): ${message}`);
  }
  return response.json();
}

export async function getSupabaseProducts() {
  const rows = await requestProducts("?select=id,name,description,price,image_url,stock,category_id&order=id.desc");
  return rows.map(mapProduct);
}

export async function getSupabaseProductById(id) {
  const databaseId = String(id).startsWith("supabase-") ? String(id).slice("supabase-".length) : id;
  const rows = await requestProducts(`?select=id,name,description,price,image_url,stock,category_id&id=eq.${encodeURIComponent(databaseId)}&limit=1`);
  return rows.length ? mapProduct(rows[0]) : null;
}

/**
 * Uploading requires an INSERT policy on storage.objects for the product-images
 * bucket. Do not add a public anonymous upload policy: this project currently
 * uses app-local authentication rather than Supabase Auth.
 */
export async function uploadProductImage(file) {
  configError();
  if (!(file instanceof File) || !file.type.startsWith("image/")) {
    throw new Error("Please select a valid image file.");
  }

  const extension = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const objectPath = `products/${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const response = await fetch(
    `${SUPABASE_URL}/storage/v1/object/product-images/${objectPath}`,
    {
      method: "POST",
      headers: headers({
        "Content-Type": file.type,
        "x-upsert": "false",
      }),
      body: file,
    }
  );

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Image upload failed (${response.status}). Check Storage upload permissions: ${message}`);
  }

  return `${SUPABASE_URL}/storage/v1/object/public/product-images/${objectPath}`;
}
