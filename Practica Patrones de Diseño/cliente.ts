import { Pelicula } from "./pelicula";
import { Sala } from "./sala"; 
export class Cliente {
    public nombre: string
    public pelicula: Pelicula
    public sala: Sala
    public asiento: string
    constructor(nombre: string, pelicula: Pelicula, sala: Sala, asiento: string) {
        this.nombre=nombre
        this.pelicula=pelicula
        this.sala=sala
        this.asiento=asiento
    }

    public mostrar(): void {
        console.log(`
            Nombre del cliente: ${this.nombre},
            Película: ${this.pelicula.nombre},
            Sala: ${this.sala.numero},
            Asiento: ${this.asiento},
            Aperitivos Gratuitos: ${this.sala.pelicula.nombre},
            Productos Comestibles: ${this.Productos()}
        `);
    }

    private Productos(): string {
        return "Palomitas, Colas, Nachos";
    }
}
