import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";

import "@styles/components/form/ContactForm.css";
import { VITE_WEB3FORMS_ACCESS_KEY } from "@config/config";
import { WEB3FORMS_API_URL } from "@utils/constants";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(null);

      fetch(WEB3FORMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: `[ContactForm] Submission from ${formData.name}`,
        }),
      })
        .then(res => res.json())
        .then(data => {
          setIsSubmitting(false);
          if (data.success) {
            setSubmitSuccess(true);
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => {
              setSubmitSuccess(false);
            }, 5000);
          } else {
            setSubmitError(
              data.message || "An error occurred. Please try again."
            );
          }
        })
        .catch(() => {
          setIsSubmitting(false);
          setSubmitError("An error occurred. Please try again.");
        });
    }
  };

  return (
    <motion.div
      className="contact-form-container"
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 50, opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {submitSuccess ? (
        <div className="success-message">
          <p>{"Thank you for your message! I'll get back to you soon."}</p>
        </div>
      ) : (
        <>
          {submitError && <div className="error-message">{submitError}</div>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>
            <input type="text" name="_honey" style={{ display: "none" }} />
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </>
      )}
    </motion.div>
  );
};

export default ContactForm;
