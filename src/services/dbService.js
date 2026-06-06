import { db } from "../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

/**
 * Saves a purchase order / transaction details to Firestore
 * Uses the customer's name as the document ID in the 'orders' collection
 */
export const saveOrder = async (orderData) => {
  try {
    const billing = orderData?.billing || {};
    const shipping = orderData?.shipping || {};
    const customerName = (billing.first_name || billing.firstName || shipping.first_name || shipping.firstName || "").trim() || "Anonymous";
    
    // Use the customer's name as the document ID in the 'orders' collection (as requested by user)
    const docRef = doc(db, "orders", customerName);
    
    await setDoc(docRef, {
      ...orderData,
      customerName: customerName,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: customerName };
  } catch (error) {
    console.error("Error saving order to Firestore:", error);
    throw error;
  }
};
