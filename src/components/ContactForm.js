"use client";

import { useState } from "react";

const initialState = (fields) =>
  fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

export default function ContactForm({ title, description, fields, submitLabel }) {
  const [formData, setFormData] = useState(() => initialState(fields));
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: title,
          ...formData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Mesaj gönderilemedi.");
      }

      setStatus("success");
      setMessage("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
      setFormData(initialState(fields));
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Mesaj gönderilemedi.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {description ? <p className="subhead">{description}</p> : null}
      {fields.map((field) => {
        if (field.type === "textarea") {
          return (
            <textarea
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
            />
          );
        }

        if (field.type === "select") {
          return (
            <select
              key={field.name}
              name={field.name}
              required={field.required}
              value={formData[field.name]}
              onChange={handleChange}
            >
              <option value="">{field.placeholder}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        }

        return (
          <input
            key={field.name}
            name={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.name]}
            onChange={handleChange}
          />
        );
      })}
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Gönderiliyor..." : submitLabel}
      </button>
      {message ? (
        <p className="notice" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
