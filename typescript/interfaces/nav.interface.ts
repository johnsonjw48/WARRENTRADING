export interface INavs {
  hash: string;
  text: string;
}

export interface INavBar {
  setShowRegister?: (val: boolean) => void;
  setShowContactUs?: (val: boolean) => void;
  navs: INavs[];
  className?: string;
  contactBtn?: boolean;
}