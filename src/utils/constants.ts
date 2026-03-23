import raxLogo from "@assets/rax-logo-2020.svg";
import mdsLogo from "@assets/mds.png";
import wayviaLogo from "@assets/wayvia-logo.svg";
import type { CompanyCardData } from "@models/card";
import { NEPTUNE_COMPANY_CARD } from "@data/neptune";

export const GITHUB_LINK = "https://github.com/imlocle";
export const LINKEDIN_LINK = "https://linkedin.com/in/imlocle";
export const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";
export const CALENDLY_URL = "https://calendly.com/loc-le/30-min-meeting";

/* ---------- Home Page ---------- */

export const COMPANIES_WORKED: CompanyCardData[] = [
  {
    alt: "Method Data Science",
    imageLogo: mdsLogo,
    link: "https://www.methoddatascience.com/",
  },
  NEPTUNE_COMPANY_CARD,
  {
    alt: "Rackspace Technology",
    imageLogo: raxLogo,
    link: "https://www.rackspace.com/",
  },
  {
    alt: "Wayvia",
    imageLogo: wayviaLogo,
    link: "https://www.wayvia.com/",
  },
];
