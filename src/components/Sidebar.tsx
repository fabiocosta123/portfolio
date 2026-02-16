'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FolderOpen } from 'lucide-react'
import { Project, ProjectsData } from '@/types/project'

interface SidebarProps {
  onProjectSelect: (project: Project) => void;
}

const projectsData: ProjectsData = {
  inicial: [
    {
      id: 1,
      name: "Site",
      image: "/alyssonAcademia.png",
      description: "Site desenvolvido em Javascript Vanilla, CSS3, usando EmailJS para serviço de envio de e-mail. Site semântico e responsivo.",
      tech: ["HTML", "CSS", "JavaScript"],
      deploy: "https://fabiocosta123.github.io/academia_alisson_godoy/",
      level: "inicial"
    },
    {
      id: 2,
      name: "Controle Receita e Despesa",
      image: "/controle.png", 
      description: "Controle de Receita e Despesas usando Javascript Vanilla, persistindo dados no localStorage, media Queries para responsividade.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      deploy: "https://fabiocosta123.github.io/Controle_de_financas/",
      level: "inicial"
    }
  ],
  intermediario: [
    {
      id: 3,
      name: "Dr. Botica - Chat IA",
      image: "/dr_botica.png",
      description: "Chat consumindo IA do Google, possível mandar e ouvir audio, imagem, download, upload, copia resposta além do dark mode.",
      tech: ["React", "Node.js", "API", "jsPDF"],
      deploy: "https://chat-ia-gamma.vercel.app/",
      level: "intermediario"
    }
  ],
  avancado: [
    {
      id: 4,
      name: "BookShelf - Sistema para Biblioteca",
      image: "/biblioteca.png",
      description: "Sistema completo para gerenciamento de biblioteca consumindo API do Google, separação de negócios entre administrador e usuário, PS: Em desenvolvimento",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      deploy: "https://bookshelf-chi-five.vercel.app/",
      level: "avancado"
    },
    {
      id: 5,
      name: "PDV - Fluxus System",
      image: "/pdv-fluxus.png",
      description: "Frente de caixa com controle de estoque desenvolvido para atender pequeno comerciante que não precisa emitir Danfe ou cupom fiscal.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      deploy: "https://pdv-fluxus.vercel.app/",
      level: "avancado"
    }
  ]
}

export default function Sidebar({ onProjectSelect }: SidebarProps) {
  const [openFolders, setOpenFolders] = useState({
    inicial: true,
    intermediario: false,
    avancado: false
  })

  const toggleFolder = (folder: string) => {
    setOpenFolders(prev => ({
      ...prev,
      [folder]: !prev[folder as keyof typeof prev]
    }))
  }

  return (
    <div className="w-64 bg-[#252526] border-r border-[#3e3e3e] flex flex-col">
      {/* Explorer Title */}
      <div className="px-4 py-2 border-b border-[#3e3e3e]">
        <h3 className="text-sm font-semibold uppercase tracking-wider">Explorer</h3>
      </div>

      {/* Projects Section */}
      <div className="flex-1 p-2">
        {/* Inicial Folder */}
        <div>
          <div 
            className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer"
            onClick={() => toggleFolder('inicial')}
          >
            {openFolders.inicial ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {openFolders.inicial ? <FolderOpen size={16} className="mr-2" /> : <Folder size={16} className="mr-2" />}
            <span className="text-sm">Inicial</span>
          </div>
          {openFolders.inicial && (
            <div className="ml-6">
              {projectsData.inicial.map((project: Project) => (
                <div
                  key={project.id}
                  className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer text-sm"
                  onClick={() => onProjectSelect(project)}
                >
                  <span className="text-yellow-400 mr-2">📄</span>
                  {project.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Intermediario Folder */}
        <div>
          <div 
            className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer"
            onClick={() => toggleFolder('intermediario')}
          >
            {openFolders.intermediario ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {openFolders.intermediario ? <FolderOpen size={16} className="mr-2" /> : <Folder size={16} className="mr-2" />}
            <span className="text-sm">Intermediário</span>
          </div>
          {openFolders.intermediario && (
            <div className="ml-6">
              {projectsData.intermediario.map((project: Project) => (
                <div
                  key={project.id}
                  className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer text-sm"
                  onClick={() => onProjectSelect(project)}
                >
                  <span className="text-yellow-400 mr-2">📄</span>
                  {project.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Avançado Folder */}
        <div>
          <div 
            className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer"
            onClick={() => toggleFolder('avancado')}
          >
            {openFolders.avancado ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            {openFolders.avancado ? <FolderOpen size={16} className="mr-2" /> : <Folder size={16} className="mr-2" />}
            <span className="text-sm">Avançado</span>
          </div>
          {openFolders.avancado && (
            <div className="ml-6">
              {projectsData.avancado.map((project: Project) => (
                <div
                  key={project.id}
                  className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer text-sm"
                  onClick={() => onProjectSelect(project)}
                >
                  <span className="text-yellow-400 mr-2">📄</span>
                  {project.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}