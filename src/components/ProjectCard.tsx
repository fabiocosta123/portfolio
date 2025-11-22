'use client'

import { useState } from 'react'
import { ExternalLink, Zap } from 'lucide-react'
import { Project } from '@/types/project'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleCardClick = () => {
    window.open(project.deploy, '_blank')
  }

  return (
    <div 
      className="max-w-2xl mx-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className={`
        relative bg-[#252526] rounded-lg border-2 overflow-hidden
        transition-all duration-300 ease-in-out
        ${isHovered 
          ? 'border-green-400 shadow-2xl shadow-green-500/20 transform -translate-y-2' 
          : 'border-[#3e3e3e] shadow-lg'
        }
      `}>
        {/* Header */}
        <div className="p-6 border-b border-[#3e3e3e]">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <div className="flex items-center space-x-2">
              <span className={`
                px-2 py-1 rounded-full text-xs font-medium
                transition-all duration-300
                ${isHovered ? 'scale-110' : 'scale-100'}
                ${
                  project.level === 'inicial' ? 'bg-blue-500/20 text-blue-300' :
                  project.level === 'intermediario' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }
              `}>
                {project.level}
              </span>
              <ExternalLink 
                size={16} 
                className={`
                  transition-all duration-300
                  ${isHovered ? 'text-green-400 scale-110' : 'text-gray-400'}
                `} 
              />
            </div>
          </div>
        </div>

        {/* Image Section - AGORA COM IMAGEM REAL */}
        <div className="h-48 bg-[#2a2d2e] relative overflow-hidden">
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            // Fallback se a imagem não carregar
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a2d2e] to-[#3e3e3e] flex items-center justify-center">
              <Zap 
                size={48} 
                className={`
                  transition-all duration-300
                  ${isHovered ? 'text-green-400 scale-110' : 'text-gray-600 scale-100'}
                `} 
              />
            </div>
          )}
          
          {/* Overlay no hover */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-[#252526] via-transparent to-transparent
            transition-opacity duration-300
            ${isHovered ? 'opacity-50' : 'opacity-30'}
          `} />
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Tecnologias:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, index: number) => (
                <span 
                  key={tech}
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium
                    transition-all duration-300
                    ${isHovered ? 'transform scale-105' : ''}
                    ${
                      index % 3 === 0 ? 'bg-blue-500/20 text-blue-300' :
                      index % 3 === 1 ? 'bg-purple-500/20 text-purple-300' :
                      'bg-orange-500/20 text-orange-300'
                    }
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-between items-center pt-4 border-t border-[#3e3e3e]">
            <span className={`
              text-sm transition-all duration-300
              ${isHovered ? 'text-green-400' : 'text-gray-400'}
            `}>
              Clique para visitar o projeto
            </span>
            <div className={`
              w-2 h-2 rounded-full bg-green-400
              transition-all duration-300
              ${isHovered ? 'scale-150 pulse-animation' : 'scale-100'}
            `} />
          </div>
        </div>
      </div>
    </div>
  )
}