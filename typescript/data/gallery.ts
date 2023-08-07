import { IGallery, IFilterNav } from "../interfaces/gallery.interface";
import { imagePath } from "../../custom.config";

export const filterNav: IFilterNav[] = [
  {
    key: "all",
    text: "Toutes"
  },
  {
    key: "apps",
    text: "Scalping"
  },
  {
    key: "branding",
    text: "Day Trading"
  },
  {
    key: "creative",
    text: "Swing Trading"
  }
]
export const gallery: IGallery[] = [
  {
    "big": imagePath + "protfolio-1.jpg",
    "small": imagePath + "protfolio-1.jpg",
    "groups": '["apps", "creative", "laptop"]'
  },
  {
    "big": imagePath + "protfolio-2.jpg",
    "small": imagePath + "protfolio-2.jpg",
    "groups": '["branding", "creative"]'
  },
  {
    "big": imagePath + "protfolio-3.jpg",
    "small": imagePath + "protfolio-3.jpg",
    "groups": '["apps", "branding", "product"]'
  },
  {
    "big": imagePath + "protfolio-4.jpg",
    "small": imagePath + "protfolio-4.jpg",
    "groups": '["product", "laptop"]'
  },
  {
    "big": imagePath + "protfolio-5.jpg",
    "small": imagePath + "protfolio-5.jpg",
    "groups": '["branding", "creative"]'
  },
  {
    "big": imagePath + "protfolio-6.jpg",
    "small": imagePath + "protfolio-6.jpg",
    "groups": '["apps", "product", "laptop"]'
  }
]