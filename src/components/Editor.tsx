'use client'

import ProjectCard from './ProjectCard'
import { Project } from '@/types/project'
import Image from 'next/image'

interface EditorProps {
  project: Project | null;
  onOpenAbout: () => void;
}

export default function Editor({ project, onOpenAbout }: EditorProps) {
  return (
    <div className="flex-1 flex flex-col bg-[#1e1e1e]">
      {/* Tabs */}
      <div className="flex bg-[#2d2d2d] border-b border-[#3e3e3e]">
        <div className="px-4 py-2 border-r border-[#1e1e1e] bg-[#1e1e1e] text-sm">
          {project ? project.name : 'welcome.md'}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-8">
        {project ? (
          <ProjectCard project={project} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            <div className="text-center max-w-2xl">
              {/* Sua Foto */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-green-400 shadow-lg shadow-green-500/20">
                  <Image 
                    src="/fabio.jpg" 
                    alt="Fábio Costa"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl mb-4 text-white">Bem-vindo ao meu portfolio!</h2>
              <p className="mb-2 text-lg">Me chamo <span className="text-green-400 font-semibold">Fábio Costa</span> e sou Desenvolvedor FullStack.</p>
              <p className="mb-4 text-gray-300">Selecione um projeto na sidebar para visualizar</p>
              
              <div className="mt-8 p-4 bg-[#252526] rounded-lg border border-[#3e3e3e]">
                <p className="mb-3">
                  Para saber mais sobre minha jornada e skills, clique em{' '}
                  <button 
                    onClick={onOpenAbout}
                    className="text-green-400 hover:text-green-300 underline transition-colors font-semibold cursor-pointer"
                  >
                    About
                  </button>
                </p>
                <p className="text-sm text-gray-400">
                  💡 Dica: Você também pode clicar em "About" no canto superior direito
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}