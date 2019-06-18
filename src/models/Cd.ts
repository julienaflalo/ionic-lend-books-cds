export class Cd {
  isAvailable: boolean;

  constructor(public name: string, public artist: string, public image: string) {
    this.isAvailable = true;
  }
}