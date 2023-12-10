import { Pelicula } from "./pelicula";
interface Observer {
    actualizar(pelicula: Pelicula): void;
}

export class Cine {
    private observer: Observer[] = [];

    public agregarObserver(observador: Observer): void {
        this.observer.push(observador);
    }

    public Cambios(pelicula: Pelicula): void {
        for (const observador of this.observer) {
            observador.actualizar(pelicula);
        }
    }
}



