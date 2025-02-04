import { Link } from "./link.model";

export class Card {
  name: string;
  sub: string;
  desc: string[];
  link: Link;
  static newone(name: string, sub: string, desc: string, link: Link) {
    return new Card(name, sub, desc.split("\n"), link);
  }
  constructor(name: string, sub: string, desc: string[], link: Link) {
    this.name = name;
    this.sub = sub;
    this.desc = desc;
    this.link = link;
  }
}
