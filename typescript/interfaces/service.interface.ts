export interface IServiceBox {
  image: string;
  text: string;
  title: string;
}

export interface IServiceTab {
  key: string;
  icon: string;
  text: string;
}

export interface IServiceBox2 {
  icon: string;
  title: string;
  desc: string;
  idx?: number;
  activeIdx?:number;
}