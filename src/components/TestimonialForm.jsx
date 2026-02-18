import { useState } from "react";

export default function TestimonialForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", role: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", role: "", message: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Leave a Testimonial</h3>
      <input
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="Your role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        required
      />
      <textarea
        placeholder="Your experience..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
      />
      <button>Submit</button>
    </form>
  );
}
