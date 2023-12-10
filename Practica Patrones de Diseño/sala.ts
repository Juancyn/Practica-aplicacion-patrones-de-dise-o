import { Pelicula } from "./pelicula";
export class Sala {
    public numero: number
    public capacidad: number
    public pelicula: Pelicula
    constructor(numero: number, capacidad: number, pelicula: Pelicula) {
        this.numero=numero
        this.capacidad=capacidad
        this.pelicula=pelicula
    }
}