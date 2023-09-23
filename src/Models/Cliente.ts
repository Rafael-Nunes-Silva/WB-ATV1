import CPF from "./CPF";
import Produto from "./Produto";
import RG from "./RG";
import Servico from "./Servico";
import Telefone from "./Telefone";

export default class Cliente {
    private nome: string;
    private nomeSocial: string;
    private genero: string;
    private CPF: CPF;
    private RGs: Array<RG>;
    private dataCadastro: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;

    constructor(
        nome: string,
        nomeSocial: string,
        genero: string,
        CPF: CPF,
        RGs: Array<RG>,
        dataCadastro: Date,
        telefones: Array<Telefone>,
        produtosConsumidos: Array<Produto>,
        servicosConsumidos: Array<Servico>
        ) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.CPF = CPF;
        this.RGs = RGs;
        this.dataCadastro = dataCadastro;
        this.telefones = telefones;
        this.produtosConsumidos = produtosConsumidos;
        this.servicosConsumidos = servicosConsumidos;
    }

    public get GetNome(): string {
        return this.nome;
    }
    public get GetNomeSocial(): string {
        return this.nomeSocial;
    }
    public get GetGenero(): string {
        return this.genero.toUpperCase();
    }
    public get GetCPF(): CPF {
        return this.CPF;
    }
    public get GetRGs(): Array<RG> {
        return this.RGs;
    }
    public get GetDataCadastro(): Date {
        return this.dataCadastro;
    }
    public get GetTelefones(): Array<Telefone> {
        return this.telefones;
    }

    public get GetProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    public get GetServicosConsumidos() {
        return this.servicosConsumidos;
    }
}