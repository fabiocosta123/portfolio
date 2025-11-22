export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  tech: string[];
  deploy: string;
  level: 'inicial' | 'intermediario' | 'avancado';
}

export interface ProjectsData {
  inicial: Project[];
  intermediario: Project[];
  avancado: Project[];
}