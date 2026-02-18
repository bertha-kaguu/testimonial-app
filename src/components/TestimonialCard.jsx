export default function TestimonialCard({ t }) {
    return (
      <div className="card">
        <p className="message">“{t.message}”</p>
        <h4>{t.name}</h4>
        <span>{t.role}</span>
      </div>
    );
  }
  