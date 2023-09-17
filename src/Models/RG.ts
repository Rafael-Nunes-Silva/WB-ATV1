export default class RG {
    private valor: string;
    private dataEmissao: Date;

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    public get Valor(): string {
        return this.valor;
    }

    public get DataEmissao(): Date {
        return this.dataEmissao;
    }
}