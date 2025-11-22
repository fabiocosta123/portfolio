'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Editor from './Editor'
import StatusBar from './StatusBar'
import About from './About'
import { Project } from '@/types/project'

export default function VSCodeLayout() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#3e3e3e]">
        <div className="flex items-center space-x-4">
          <span className="text-sm">File</span>
          <span className="text-sm">Edit</span>
          <span className="text-sm">View</span>
          <span className="text-sm">Help</span>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm">Portfolio - Visual Studio Code</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowAbout(true)}
            className="text-sm hover:text-green-400 transition-colors cursor-pointer"
          >
            About
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onProjectSelect={setSelectedProject} />
        <Editor 
          project={selectedProject} 
          onOpenAbout={() => setShowAbout(true)} 
        />
      </div>

      <StatusBar />

      {/* About Modal */}
      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </div>
  )
}