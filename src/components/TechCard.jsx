export default function TechCard({ tech, selected, onAdd }) {
  return (
    <article className="card">
      <div className="card-top">
        <img src={tech.icon} alt={tech.name} />
        <span className="badge">{tech.badge}</span>
      </div>

      <h3>{tech.name}</h3>
      <p>{tech.description}</p>

      <div className="meta">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
      </div>

      <div className="card-bottom">
        <span className="rating">★ {tech.rating}</span>
        <button disabled={selected} onClick={onAdd}>
          {selected ? '✓ Added to Stack' : '+ Add to Stack'}
        </button>
      </div>
    </article>
  )
}
