export class Menu {
  titre: string;
  prix1!: number;
  prix2!: number;
  prix3!: number;
  optionPrix1: string;
  optionPrix2: string;
  optionPrix3: string;
  image: string;
  disponibilite!: string;

  constructor(titre: string, prix1: number, prix2: number, prix3: number,
    optionPrix1: string,
    optionPrix2: string,
    optionPrix3: string,
    image: string,
    disponibilite: string) {
      
    this.titre = titre;
    this.prix1 = prix1;
    this.prix2 = prix2;
    this.prix3 = prix3
    
    this.optionPrix1 = optionPrix1;
    this.optionPrix2 = optionPrix2;
    this.optionPrix3 = optionPrix3;

    this.image = image
    this.disponibilite = disponibilite;
  }
}
