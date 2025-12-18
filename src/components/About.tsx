'use client'

import { X, Mail, Github, Linkedin, FileText } from 'lucide-react'

interface AboutProps {
  onClose: () => void;
}

export default function About({ onClose }: AboutProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#252526] rounded-lg border border-[#3e3e3e] max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#3e3e3e]">
          <h2 className="text-lg font-semibold cursor-pointer">About Me</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-[#3e3e3e] rounded transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-80px)]">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Photo Section */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto">
                <img src='./fabio.jpg' alt="foto" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">Fábio Costa Silva</h3>
                <p className="text-gray-400">Desenvolvedor Full Stack</p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Sobre Mim</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Sou um desenvolvedor apaixonado por arquitetar soluções inovadoras e eficientes.
                    Minha jornada de mais de uma década na área de TI me permitiu evoluir de vendas e 
                    suporte de automação para a criação de aplicações complexas usando tecnologias modernas 
                    como React e ASP .NET Core. Estudante de Sistemas para Internet na Unicesumar, sou autodidata 
                    por natureza e acredito que a tecnologia deve mudar a vida das pessoas. 
                    Meu foco é ser o agente dessa mudança, combinando minha experiência em campo com a 
                    capacidade de aprender rapidamente novas ferramentas (Next, Node.js, TypeScript).
                  </p>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'C#', 'SQL', '.NET', 'API Rest'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-[#2d2d2d] border border-[#3e3e3e] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Contato</h4>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="mailto:developerfabiocsilva@gmail.com"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                    <a 
                      href="https://github.com/fabiocosta123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/fabio-costa-silva-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                    <a 
                      href="/DesenvolvedorFullStack01.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FileText size={16} />
                      Currículo
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Jornada</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">Início: Projetos básicos com HTML, CSS, JS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-300">Intermediário: React, APIs, bancos de dados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">Avançado: Sistemas complexos, TypeScript, arquitetura</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}