export default class Produto {
    private nome: string;
    private valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }

    public get Nome(): string {
        return this.nome;
    }

    public get Valor(): number {
        return this.valor;
    }
}