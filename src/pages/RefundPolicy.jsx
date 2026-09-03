import React from "react";
import { Link } from "react-router-dom";
import "./RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="refund-page">
      <div className="refund-container">

        <div className="refund-header">
          <h1>Refund Policy</h1>
          <p>
            Refund and cancellation policy of NEERAJ ENTERPRISES.
          </p>
        </div>

        <section className="refund-section">
          <h2>1. Introduction</h2>
          <p>
            This Refund Policy explains the terms related to cancellations,
            refunds, and payments for products or services provided by
            NEERAJ ENTERPRISES.
          </p>
        </section>

        <section className="refund-section">
          <h2>2. Wholesale Business</h2>
          <p>
            NEERAJ ENTERPRISES is engaged in wholesale trading and supply of
            fruits and vegetables. Orders are generally handled according to
            mutually agreed business terms between the buyer and NEERAJ
            ENTERPRISES.
          </p>
        </section>

        <section className="refund-section">
          <h2>3. Order Cancellation</h2>
          <p>
            Cancellation requests should be communicated as soon as possible
            before the order is processed, dispatched, or supplied.
          </p>
          <p>
            Once an order has been processed, dispatched, or supplied,
            cancellation may not be possible.
          </p>
        </section>

        <section className="refund-section">
          <h2>4. Refund Eligibility</h2>
          <p>
            Refund eligibility will depend on the nature of the transaction,
            condition of the products, payment status, and the mutually agreed
            commercial terms.
          </p>
          <p>
            Any approved refund will be processed through the appropriate
            payment method or as mutually agreed with the customer.
          </p>
        </section>

        <section className="refund-section">
          <h2>5. Damaged or Incorrect Products</h2>
          <p>
            If products are received damaged, incorrect, or substantially
            different from the agreed order, the customer should contact
            NEERAJ ENTERPRISES promptly with the relevant order details.
          </p>
          <p>
            Each complaint will be reviewed based on the circumstances and
            applicable business agreement.
          </p>
        </section>

        <section className="refund-section">
          <h2>6. Non-Refundable Situations</h2>
          <p>
            Refunds may not be available where products have been accepted,
            consumed, resold, improperly stored, or otherwise handled after
            delivery, except where required under applicable law or an agreed
            commercial arrangement.
          </p>
        </section>

        <section className="refund-section">
          <h2>7. Contact Us</h2>
          <div className="refund-contact">
            <p><strong>NEERAJ ENTERPRISES</strong></p>
            <p>Indore, Madhya Pradesh - 452001</p>
            <p>Phone: 9907406837</p>
            <p>Email: senneerajdabra257@gmail.com</p>
          </div>
        </section>

        <div className="refund-back">
          <Link to="/">← Back to Home</Link>
          <Link to="/terms">Terms & Conditions →</Link>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;