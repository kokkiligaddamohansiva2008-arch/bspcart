/*
| Shared form validators / input sanitizers.
| Used by every page that collects a mobile number or pincode so the
| rules stay identical everywhere.
*/

export const MOBILE_LENGTH = 10;
export const PINCODE_LENGTH = 6;

// Keep digits only, optionally cut to a max length (blocks letters & symbols,
// including pasted ones).
export const digitsOnly = (value, max = Infinity) =>
  String(value ?? "").replace(/\D/g, "").slice(0, max);

// Mobile: digits only, max 10. Also copes with pasted numbers such as
// "+91 98765 43210" or "098765 43210" by dropping the 91 / 0 prefix.
export const sanitizeMobile = (value) => {
  let d = digitsOnly(value);
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  else if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d.slice(0, MOBILE_LENGTH);
};

// Pincode: digits only, max 6 (pasted "505 001" becomes "505001").
export const sanitizePincode = (value) => digitsOnly(value, PINCODE_LENGTH);

export const isValidMobile = (value) => /^\d{10}$/.test(String(value ?? ""));

export const isValidPincode = (value) => /^\d{6}$/.test(String(value ?? ""));

export const MOBILE_MESSAGE = "Mobile number must be exactly 10 digits";
export const PINCODE_MESSAGE = "Pincode must be exactly 6 digits";

/* ---------------------------- Payment helpers --------------------------- */

// e.g. name@okbank
export const isValidUpiId = (value) =>
  /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(String(value ?? "").trim());

// Luhn checksum — catches mistyped card numbers.
export const isValidCardNumber = (value) => {
  const digits = digitsOnly(value);
  if (digits.length !== 16) return false;

  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = Number(digits[digits.length - 1 - i]);
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  return sum % 10 === 0;
};

export const formatCardNumber = (value) =>
  digitsOnly(value, 16).replace(/(.{4})(?=.)/g, "$1 ");

export const formatExpiry = (value) => {
  const d = digitsOnly(value, 4);
  return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

// "MM/YY", month 01-12, not already expired
export const isValidExpiry = (value) => {
  const m = /^(\d{2})\/(\d{2})$/.exec(String(value ?? ""));
  if (!m) return false;
  const month = Number(m[1]);
  const year = 2000 + Number(m[2]);
  if (month < 1 || month > 12) return false;
  // card is valid through the last day of the expiry month
  return new Date(year, month, 1) > new Date();
};
