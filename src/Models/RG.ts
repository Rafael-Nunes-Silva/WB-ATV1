export default class RG {
    private valor: string = "00000000000";

    constructor(valor: string) {
        this.valor = valor;
    }

    public get Valor(): string {
        return this.valor;
    }
}