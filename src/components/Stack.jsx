export default function Stack({ stack, onRemove, onClear }) {
  return (
    <aside className="stack">
      <div className="stack-head">
        <div>
          <h2>Your Stack</h2>
          <p>{stack.length} Technolog{stack.length === 1 ? 'y' : 'ies'} Selected</p>
        </div>
        <span className="count">{stack.length}</span>
      </div>

      {stack.length === 0 ? (
        // Conditional rendering: empty-state message
        <div className="empty">
          <div className="empty-icon">⌘</div>
          <h3>Your stack is empty</h3>
          <p>Add technologies from the list to start building your stack.</p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((t) => (
              <div className="stack-item" key={t.id}>
                <img src={t.icon} alt="" />
                <div>
                  <b>{t.name}</b>
                  <small>{t.category}</small>
                </div>
                <button onClick={() => onRemove(t)} aria-label={`Remove ${t.name}`}>×</button>
              </div>
            ))}
          </div>
          <button className="clear" onClick={onClear}>Remove All</button>
        </>
      )}
    </aside>
  )
}
