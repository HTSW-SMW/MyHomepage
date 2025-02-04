export class Link {
  routerlink: string;
  newSite: boolean = false;
  constructor(routerlink: string, newSite: boolean) {
    this.routerlink = routerlink;
    this.newSite = newSite;
  }
}
