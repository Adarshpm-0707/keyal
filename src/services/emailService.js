import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_CUSTOMER_TEMPLATE_ID } from "../config";

/**
 * Sends notification emails when a new order is received.
 * Sends an admin email notification and a separate customer receipt email.
 */
export const sendOrderEmailNotification = async (order) => {
  const serviceId = EMAILJS_SERVICE_ID;
  const adminTemplateId = process.env.REACT_APP_EMAILJS_ORDER_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;
  const customerTemplateId = EMAILJS_CUSTOMER_TEMPLATE_ID;
  const publicKey = EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey) {
    console.warn("EmailJS configuration missing. Skipping email notifications.");
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
    name: billing.first_name || "Anonymous", // Maps to {{name}} in EmailJS template
    email: billing.email || "N/A",           // Maps to {{email}} in EmailJS template
    phone: billing.phone || "N/A",
    product_name: productName || "N/A",
    quantity: quantity,
    total_price: order.total || 0,
    address: addressBlock
  };

  let adminSuccess = false;
  let customerSuccess = false;

  // 1. Send Admin Notification Email
  if (adminTemplateId) {
    try {
      const payload = {
        service_id: serviceId,
        template_id: adminTemplateId,
        user_id: publicKey,
        template_params: templateParams,
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Admin order notification email sent successfully.");
        adminSuccess = true;
      } else {
        const errText = await response.text();
        console.error("Admin order notification email failed:", errText);
      }
    } catch (error) {
      console.error("Error sending admin order email:", error);
    }
  }

  // 2. Send Customer Confirmation Email (Separate Template)
  if (customerTemplateId) {
    try {
      const payload = {
        service_id: serviceId,
        template_id: customerTemplateId,
        user_id: publicKey,
        template_params: templateParams,
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Customer confirmation email sent successfully.");
        customerSuccess = true;
      } else {
        const errText = await response.text();
        console.error("Customer confirmation email failed:", errText);
      }
    } catch (error) {
      console.error("Error sending customer confirmation email:", error);
    }
  }

  return { 
    success: adminSuccess || customerSuccess,
    adminSuccess,
    customerSuccess 
  };
};
