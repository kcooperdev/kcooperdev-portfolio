
export interface Project {
  id: string;
  name: string;
  link: string;
  image: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  link: string;
  image: string;
  description: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  ARTICLES = 'articles'
}
