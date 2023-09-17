export default class CPF {
    private valor: string = "00000000000";

    constructor(valor: string) {
        this.valor = valor.replace(".", "").replace("-", "");
    }

    public get Valor(): string {
        return this.valor;
    }

    public get ValorFormatado(): string {
        "000.000.000-00"
        return `${this.valor.slice(0, 3)}.${this.valor.slice(3, 6)}.${this.valor.slice(6, 9)}-${this.valor.slice(9, 12)}`;
    }
}