import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IPortfolioItemData {
  itemName?: string;
  itemSummary?: string;
  itemDescription?: string;
  itemImage?: string;
  itemLinks?: buttonLinkData[];
}

export interface IAboutMeData {
  aboutMeText?: string;
}

export interface IContactData {
  iconLinks?: buttonLinkData[];
  phoneNumber?: string;
  personalEmail?: string;
}


export interface buttonLinkData {
  redirectLink?: string;
  fontAwesomeItemProp?: IconProp;
}