import TechCard from './TechCard.jsx'

export default function TechGrid({ technologies, stack, onAdd }) {
  return (
    <div className="tech-grid">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          selected={stack.some((item) => item.id === tech.id)}
          onAdd={() => onAdd(tech)}
        />
      ))}
    </div>
  )
}
