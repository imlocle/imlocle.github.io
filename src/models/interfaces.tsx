export interface Card {
  id: number;
  title: string;
  description: string;

  appStore?: string;
  buttonClassName?: string;
  highlights?: string[];
  icon?: string;
  image?: string;
  link?: string;
  linkText?: string;
  outcomes?: string;
  technologies: string[];
}
