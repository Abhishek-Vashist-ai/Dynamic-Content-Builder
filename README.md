PageBuilder — Dynamic Content Builder
## Overview
PageBuilder is a React-based drag-and-drop content builder that allows users to create, edit, and organize a custom page using dynamic content blocks.
This project was developed as part of a Frontend Developer Intern assignment to demonstrate practical skills in UI/UX, state management, and interactive frontend systems.
## Features
Add multiple block types: Heading, Text, Image, and Markdown
Edit content directly on the canvas (real-time updates)
Drag-and-drop reordering using a dedicated handle (⠿)
Markdown editor with Edit and Preview modes
Persistent state using localStorage (data survives refresh)
Responsive two-column layout using CSS Flexbox
## Tech Stack
React (Vite)
JavaScript (ES6+)
@dnd-kit (Drag & Drop)
marked (Markdown parsing)
CSS (Custom styling)
## Project Structure
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Canvas.jsx
│   └── SortableBlock.jsx
├── App.jsx
├── App.css
└── main.jsx
## How It Works
State Management
All blocks are stored in a single state array. Each block contains:
id (unique identifier)
type (block type)
content (editable data)
Block Operations
Add → creates a new block
Update → modifies specific block using .map()
Delete → removes block using .filter()
Drag & Drop
Implemented using @dnd-kit:
DndContext handles drag events
SortableContext manages ordering
useSortable enables dragging per block
arrayMove updates block positions
Persistence
Data is stored in localStorage and restored on reload.
## Installation & Setup
git clone <your-repo-url>
cd project-folder
npm install
npm run dev
## Live Demo
https://shooping-website-five.vercel.app/
## GitHub Repository
https://github.com/Abhishek-Vashist-ai/Shooping-website
## Development Approach
This project was built incrementally over three days:
Day 1: Layout and block palette
Day 2: CRUD functionality and persistence
Day 3: Drag-and-drop integration and component refactoring
## Learning Note
During development, I referred to official documentation and external resources to better understand advanced concepts such as drag-and-drop interactions, state immutability, and dynamic rendering.