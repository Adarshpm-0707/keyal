import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../config";

/**
 * Sends a notification email when a new order is received.
 * Mapped to the user's custom EmailJS template variables.
 */
export const sendOrderEmailNotification = async (order) => {
  const serviceId = EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_ORDER_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;
  const publicKey = EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn("EmailJS configuration missing. Skipping order email notification.");
    return { success: false, error: "Configuration missing" };
  }

  const billing = order?.billing || {};
  const lineItems = order?.line_items || [];
  
  // Format products list
  const productName = lineItems
    .map(item => `${item.name} (${item.quantity}x)`)
    .join(", ");
    
  // Format total quantity
  const quantity = lineItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Format address block
  const addressBlock = `${billing.address_1 || ""}, ${billing.city || ""}, ${billing.state || ""} - ${billing.postcode || ""}, ${billing.country || ""}`;

  const templateParams = {
    customer_name: billing.first_name || "Anonymous",
    customer_email: billing.email || "N/A",
    phone: billing.phone || "N/A",
    product_name: productName || "N/A",
    quantity: quantity,
    total_price: order.total || 0,
    address: addressBlock
  };

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: templateParams,
  };

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("Order confirmation email sent successfully.");
      return { success: true };
    } else {
      const errText = await response.text();
      console.error("Order confirmation email failed:", errText);
      return { success: false, error: errText };
    }
  } catch (error) {
    console.error("Network error sending order email:", error);
    return { success: false, error: error.message };
  }
};
