function Sidebar({ addBlock }) {
  return (
    <aside className="sidebar">
      <h2>PageBuilder</h2>
      <p className="sidebar-hint">Click to add a block</p>

      <button className="palette-button" onClick={() => addBlock('header')}>
        <span className="icon">H</span> Header Block
      </button>
      <button className="palette-button" onClick={() => addBlock('text')}>
        <span className="icon">T</span> Text Block
      </button>
      <button className="palette-button" onClick={() => addBlock('image')}>
        <span className="icon">I</span> Image Block
      </button>
      <button className="palette-button" onClick={() => addBlock('markdown')}>
        <span className="icon">#</span> Markdown Block
      </button>

      <div className="sidebar-footer">
        <p className="sidebar-hint">⠿ Drag handle to reorder</p>
        <p className="sidebar-hint">Auto-saved to browser</p>
      </div>
    </aside>
  )
}

export default Sidebar