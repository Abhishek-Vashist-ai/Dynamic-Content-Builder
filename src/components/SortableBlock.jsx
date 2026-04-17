import { marked } from 'marked'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function SortableBlock({ block, onDelete, onUpdate }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} className="block-wrapper">

      <div className="block-header">
        <span className="drag-handle" {...attributes} {...listeners}>
          ⠿
        </span>
        <span className="block-label">{block.type}</span>
        <button className="delete-btn" onClick={() => onDelete(block.id)}>
          &times;
        </button>
      </div>

      <div className="block-content">

        {block.type === 'header' && (
          <input
            className="header-input"
            value={block.content}
            onChange={(e) => onUpdate(block.id, e.target.value)}
          />
        )}

        {block.type === 'text' && (
          <textarea
            className="text-input"
            value={block.content}
            onChange={(e) => onUpdate(block.id, e.target.value)}
          />
        )}

        {block.type === 'image' && (
          <div className="image-block">
            <input
              className="url-input"
              type="text"
              placeholder="Paste image URL here..."
              value={block.content.url}
              onChange={(e) => onUpdate(block.id, {
                ...block.content,
                url: e.target.value
              })}
            />
            <input
              className="url-input"
              type="text"
              placeholder="Alt text (describe the image)"
              value={block.content.alt}
              onChange={(e) => onUpdate(block.id, {
                ...block.content,
                alt: e.target.value
              })}
            />
            {block.content.url && (
              <img
                src={block.content.url}
                alt={block.content.alt}
                className="image-preview"
              />
            )}
          </div>
        )}

        {block.type === 'markdown' && (
          <div className="markdown-block">
            <div className="md-tabs">
              <button
                className={`md-tab ${!block.content.preview ? 'active' : ''}`}
                onClick={() => onUpdate(block.id, { ...block.content, preview: false })}
              >
                Edit
              </button>
              <button
                className={`md-tab ${block.content.preview ? 'active' : ''}`}
                onClick={() => onUpdate(block.id, { ...block.content, preview: true })}
              >
                Preview
              </button>
            </div>

            {!block.content.preview ? (
              <textarea
                className="text-input"
                placeholder="Write markdown... ## Heading, **bold**, *italic*"
                value={block.content.text}
                onChange={(e) => onUpdate(block.id, {
                  ...block.content,
                  text: e.target.value
                })}
              />
            ) : (
              <div
                className="md-preview"
                dangerouslySetInnerHTML={{ __html: marked(block.content.text) }}
              />
            )}
          </div>
        )}

      </div>
    </div>
  )
}

export default SortableBlock