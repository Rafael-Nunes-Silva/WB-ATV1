export default class CPF {
    private valor: string;
    private dataEmissao: Date;

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor.replace(".", "").replace("-", "");
        this.dataEmissao = dataEmissao;
    }

    public get Valor(): string {
        return this.valor;
    }

    public get ValorFormatado(): string {
        "000.000.000-00"
        return `${this.valor.slice(0, 3)}.${this.valor.slice(3, 6)}.${this.valor.slice(6, 9)}-${this.valor.slice(9, 12)}`;
    }

    public get DataEmissao(): Date {
        return this.dataEmissao;
    }
}