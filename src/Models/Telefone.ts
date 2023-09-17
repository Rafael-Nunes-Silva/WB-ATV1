export default class Telefone {
    private ddd: string;
    private numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    public get DDD(): string {
        return this.ddd;
    }

    public get Numero(): string {
        return this.numero;
    }

    public get NumeroFormatado(): string {
        return `(${this.ddd}) ${this.numero}`;
    }
}