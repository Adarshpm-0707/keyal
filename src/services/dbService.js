import { db } from "../firebase/firebase";
import { doc, setDoc, serverTimestamp, collection, getDocs, query, orderBy } from "firebase/firestore";

/**
 * Saves a purchase order / transaction details to Firestore
 * Uses the customer's name as the document ID in the 'orders' collection
 */
export const saveOrder = async (orderData) => {
  try {
    const billing = orderData?.billing || {};
    const shipping = orderData?.shipping || {};
    const customerName = (billing.first_name || billing.firstName || shipping.first_name || shipping.firstName || "").trim() || "Anonymous";
    
    // Create a unique document ID starting with the customer's name to allow multiple documents
    // (orders) to be added for the same customer without overwriting previous ones.
    const cleanCustomerName = customerName.replace(/[^a-zA-Z0-9]/g, "_"); // sanitize name for safety in document path
    const uniqueSuffix = Date.now() + "_" + Math.random().toString(36).substring(2, 6).toUpperCase();
    const docId = `${cleanCustomerName}_${uniqueSuffix}`;
    const docRef = doc(db, "orders", docId);
    
    await setDoc(docRef, {
      ...orderData,
      customerName: customerName,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docId };
  } catch (error) {
    console.error("Error saving order to Firestore:", error);
    throw error;
  }
};

/**
 * Fetches all orders from the Firestore 'orders' collection
 */
export const getAllOrders = async () => {
  try {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    return orders;
  } catch (error) {
    console.warn("Error fetching sorted orders; attempting unsorted fallback:", error);
    try {
      const ordersRef = collection(db, "orders");
      const querySnapshot = await getDocs(ordersRef);
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push({ id: doc.id, ...doc.data() });
      });
      return orders;
    } catch (fallbackError) {
      console.error("Fallback error fetching orders:", fallbackError);
      throw fallbackError;
    }
  }
};

