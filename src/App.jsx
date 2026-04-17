import { useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Sidebar from './components/Sidebar'
import Canvas from './components/Canvas'
import './App.css'

function App() {

  const [blocks, setBlocks] = useState(() => {
    const saved = localStorage.getItem('blocks')
    return saved ? JSON.parse(saved) : []
  })

  const saveToStorage = (updatedBlocks) => {
    localStorage.setItem('blocks', JSON.stringify(updatedBlocks))
  }

  const addBlock = (type) => {
    const newBlock = {
      id: Date.now(),
      type: type,
      content: type === 'header' ? 'New Heading' :
               type === 'text' ? 'Click to edit this text...' :
               type === 'image' ? { url: '', alt: '' } :
               type === 'markdown' ? { text: '', preview: false } :
               '',
    }
    const updated = [...blocks, newBlock]
    setBlocks(updated)
    saveToStorage(updated)
  }

  const deleteBlock = (id) => {
    const updated = blocks.filter(block => block.id !== id)
    setBlocks(updated)
    saveToStorage(updated)
  }

  const updateBlock = (id, newContent) => {
    const updated = blocks.map(block =>
      block.id === id ? { ...block, content: newContent } : block
    )
    setBlocks(updated)
    saveToStorage(updated)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = blocks.findIndex(b => b.id === active.id)
      const newIndex = blocks.findIndex(b => b.id === over.id)
      const reordered = arrayMove(blocks, oldIndex, newIndex)
      setBlocks(reordered)
      saveToStorage(reordered)
    }
  }

  return (
    <div className="app-container">
      <Sidebar addBlock={addBlock} />
      <Canvas
        blocks={blocks}
        onDelete={deleteBlock}
        onUpdate={updateBlock}
        onDragEnd={handleDragEnd}
      />
    </div>
  )
}

export default App