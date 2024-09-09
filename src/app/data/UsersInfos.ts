import { Menu } from "./menu";

export class UsersInfos {
  nom: string;
  prenom: string;
  age: number;
  numero: number;
  uid: string;
  email: string;
  password: string;

  constructor(nom: string, prenom: string, age: number, numero: number, uid: string, email: string,password: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.numero = numero;
    this.uid = uid;
    this.email = email;
    this.password = password;
  }

}
