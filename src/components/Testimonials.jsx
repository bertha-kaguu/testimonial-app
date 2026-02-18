import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialForm from "./TestimonialForm";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost/api/getTestimonials.php")
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const submitTestimonial = async (form) => {
    await fetch("http://localhost/api/submitTestimonial.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Thank you! Your testimonial has been submitted.");
  };

  return (
    <section className="testimonials">
      <h2>What People Say</h2>
      <div className="grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
      <TestimonialForm onSubmit={submitTestimonial} />
    </section>
  );
}
