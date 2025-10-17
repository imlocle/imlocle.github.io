export interface IPreviewCard {
  title: string;
  description: string;
  link: string;

  icon?: string;
  image?: string;
}

export interface IMainCard {
  id: number;
  title: string;
  description: string;

  highlights?: string[];
  icon?: string;
  outcomes?: string;
  technologies?: string[];
  image?: string;
  link?: string;
  appStore?: string;
}
