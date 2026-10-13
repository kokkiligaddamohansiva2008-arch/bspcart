/*
|--------------------------------------------------------------------------
| BSP CART — Payment service (DEMO)
|--------------------------------------------------------------------------
| This SIMULATES a payment so the checkout flow can be built and tested.
| NO real money is moved.
|
| To collect real money, replace collectPayment() with a payment gateway
| (Razorpay, Cashfree, PhonePe, Stripe...):
|   1. Backend creates a gateway order for the amount.
|   2. Frontend opens the gateway's checkout (it collects the UPI / card
|      details itself, so they never touch this app or your server).
|   3. Backend verifies the payment signature, then marks the order paid.
|
| Never store card numbers or CVVs in localStorage or your database.
*/

export const collectPayment = ({ method, amount }) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        txnId: "BSP" + Date.now().toString(36).toUpperCase(),
        method,
        amount,
      });
    }, 1800);
  });
