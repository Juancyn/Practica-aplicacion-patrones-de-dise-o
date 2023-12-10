import { Cliente } from "./cliente";

abstract class ComboDecorator{
    constructor(protected cliente: Cliente) {}

    public abstract mostrar(): void;
}

export class ComboComida extends ComboDecorator{
    private productos: string[];
    
    constructor(cliente: Cliente, productos: string[]) {
        super(cliente);
        this.productos = productos;
    }

    public mostrar(): void {
        this.cliente.mostrar();
        console.log(`Productos (Combo): ${this.productos.join(", ")}`);
    }
}