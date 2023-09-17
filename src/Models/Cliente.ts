

export default class Cliente{
    private nome: string;
    private nomeSocial: string;
    private CPF: CPF;
    private RGs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;

    constructor(
        nome: string,
        nomeSocial: string,
        CPF: CPF,
        RGs: Array<RG>,
        dataCadastro: Date,
        telefones: Array<Telefone>,
        produtosConsumidos: Array<Produto>,
        servicosConsumidos: Array<Servico>
        ){
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.CPF = CPF;
        this.RGs = RGs;
        this.dataCadastro = dataCadastro;
        this.telefones = telefones;
        this.produtosConsumidos = produtosConsumidos;
        this.servicosConsumidos = servicosConsumidos;
    }
}