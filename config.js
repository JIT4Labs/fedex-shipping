// ============================================================
// JIT4Labs FedEx Shipping - Configuration
// ============================================================
// Replace these placeholder URLs with your actual Zapier webhook URLs.
// See SETUP.md for instructions on creating the Zapier Zaps.
// ============================================================

window.APP_CONFIG = {
    // Zapier Webhook #1: Fetches Receipt Note + Vendor + PO data from Vtiger
    // Create a "Catch Hook" Zap and paste the webhook URL here
    ZAPIER_VTIGER_WEBHOOK: 'YOUR_ZAPIER_VTIGER_WEBHOOK_URL_HERE',

    // Zapier Webhook #2: Creates FedEx shipment and returns label
    // Create a "Catch Hook" Zap and paste the webhook URL here
    ZAPIER_FEDEX_WEBHOOK: 'YOUR_ZAPIER_FEDEX_WEBHOOK_URL_HERE',

    // FedEx Environment: 'sandbox' or 'production'
    FEDEX_ENV: 'sandbox'
};
