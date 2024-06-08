import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Have a question or feedback? We'd love to hear from you! Get in touch with us using one of the methods
            below:
          </p>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Customer Support</h2>
              <p>For assistance with your order or any other queries, please reach out to our customer support team.</p>
              <p>Phone: 1800-123-4567</p>
              <p>Email: support@swiggy.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Business Inquiries</h2>
              <p>If you're a restaurant owner or have business-related inquiries, please contact our business team.</p>
              <p>Phone: 1800-234-5678</p>
              <p>Email: business@swiggy.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Media & Press</h2>
              <p>For media inquiries or press-related matters, please reach out to our media relations team.</p>
              <p>Phone: 1800-345-6789</p>
              <p>Email: media@swiggy.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
