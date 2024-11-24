import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../helper/api/axiosInstance";

// toast.configure();

const PaymentComponent = ( subscriptionData ) => {
  const [subscriptionType, setSubscriptionType] = useState("monthly");

  console.log(subscriptionData,"subscription")

  const handlePayment = async () => {
    let amount;
    if (subscriptionType === "daily") amount = 100; // Example prices
    else if (subscriptionType === "weekly") amount = 500;
    else if (subscriptionType === "monthly") amount = 2000;
    else if (subscriptionType === "yearly") amount = 20000;

    try {
      const response = await axiosInstance.post(`/api/payment`, {
        email: subscriptionData.email,
        subscriptionType,
        amount,
      });

      if (response.data.url) {
        window.location.href = response.data.url; // Redirect to payment gateway
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Subscription Plan</h2>

      {/* Display expiration status */}
      {subscriptionData.expirationDate && (
        <p>
          Your subscription expires on:{" "}
          <strong>{new Date(subscriptionData.expirationDate).toLocaleDateString()}</strong>
        </p>
      )}
      {subscriptionData.isExpired && <p style={{ color: "red" }}>Subscription Expired!</p>}

      {/* Subscription options */}
      <div>
        <label>
          <input
            type="radio"
            name="subscriptionType"
            value="daily"
            checked={subscriptionType === "daily"}
            onChange={() => setSubscriptionType("daily")}
          />
          Daily - $1
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="subscriptionType"
            value="weekly"
            checked={subscriptionType === "weekly"}
            onChange={() => setSubscriptionType("weekly")}
          />
          Weekly - $5
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="subscriptionType"
            value="monthly"
            checked={subscriptionType === "monthly"}
            onChange={() => setSubscriptionType("monthly")}
          />
          Monthly - $20
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="subscriptionType"
            value="yearly"
            checked={subscriptionType === "yearly"}
            onChange={() => setSubscriptionType("yearly")}
          />
          Yearly - $200
        </label>
      </div>

      {/* Payment Button */}
      <button className="bg-teal-500 w-44 h-16 flex_center rounded-sm " onClick={handlePayment} style={{ marginTop: "20px" }}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentComponent;
