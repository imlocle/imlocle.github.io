export type PreviewCardData = {
  title: string;
  description: string;
  link: string;

  icon?: string;
  image?: string;
}

export type MainCardData = {
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
  target?: "_blank" | "_self";
}

export type PricingCardData = {
  title: string;
  price: string;
  bestFor: string;
  details: string[];
  isFeatured?: boolean;
}

export type CompanyCardData = {
  alt: string;
  imageLogo: string;
  link: string;
}
