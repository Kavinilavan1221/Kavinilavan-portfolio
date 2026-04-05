import { Newsletter } from "./Newsletter";
import emailjs from '@emailjs/browser';
import { useState } from "react";

export const MailchimpForm = () => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const subscribe = async (formData) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_t1x38gs";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_on9it7i";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "h7HiH5p6iTrROs-6x";

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: "Newsletter Subscriber",
          firstName: "Newsletter",
          lastName: "Subscriber",
          email: formData.EMAIL,
          message: `New newsletter subscription request from: ${formData.EMAIL}`,
        },
        publicKey
      );

      setStatus("success");
      setMessage("Thank you for subscribing!");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <Newsletter
      status={status}
      message={message}
      onValidated={formData => subscribe(formData)}
    />
  );
}
