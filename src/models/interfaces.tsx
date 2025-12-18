export interface IPreviewCard {
  title: string;
  description: string;
  link: string;

  icon?: string;
  image?: string;
}

export interface IMainCard {
  id: string | number;
  title: string;
  description: string;

  ctaLabel?: string;
  highlights?: string[];
  icon?: string;
  outcomes?: string;
  technologies?: string[];
  image?: string;
  link?: string;
  appStore?: string;
}

export interface IPricingCard {
  title: string;
  price: string;
  bestFor: string;
  details: string[];
  isFeatured?: boolean;
}

export interface ICompanyCard {
  alt: string;
  imageLogo: string;
  link: string;
}
