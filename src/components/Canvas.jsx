import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import SortableBlock from './SortableBlock'

function Canvas({ blocks, onDelete, onUpdate, onDragEnd }) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  )

  return (
    <main className="canvas-area">
      <div className="canvas">

        {blocks.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">✦</div>
            <h3>Your canvas is empty</h3>
            <p>Click a block from the left panel to start building.</p>
          </div>
        )}

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={blocks.map(b => b.id)}
            strategy={verticalListSortingStrategy}
          >
            {blocks.map((block) => (
              <SortableBlock
                key={block.id}
                block={block}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </SortableContext>
        </DndContext>

      </div>
    </main>
  )
}

export default Canvas