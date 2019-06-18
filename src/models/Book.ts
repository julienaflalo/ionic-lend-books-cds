export class Book {
  isAvailable: boolean;

  constructor(public name: string, public author: string, public image: string, public description: string) {
    this.isAvailable = true;
  }
}