import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IPortfolioData {
  portfolioItems: IPortfolioItemData[];
  aboutMeData: IAboutMeData;
  contactData: IContactData;
}

export interface IPortfolioItemData {
  itemId?: string;
  itemName?: string;
  itemDescription?: string;
  itemImage?: string;
  itemLinks?: IButtonLinkData[];
}

export interface IAboutMeData {
  aboutMeText?: string;
}

export interface IContactData {
  buttonLinks?: IButtonLinkData[];
  phoneNumber?: string;
  personalEmail?: string;
  regionData?: IRegionData
}

export interface IRegionData {
  city?: string,
  province?: string,
  country?: string,
}


export interface IButtonLinkData {
  redirectLink: string;
  fontAwesomeItemProp: IconProp;
}