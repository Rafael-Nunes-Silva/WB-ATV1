import IOManager from "../IO/IOManager";
import Cliente from "../Models/Cliente";
import Produto from "../Models/Produto";
import RG from "../Models/RG";
import Servico from "../Models/Servico";
import Telefone from "../Models/Telefone";
import CPFManager from "./CPFManager";
import ProdutoManager from "./ProdutoManager";
import RGManager from "./RGManager";
import ServicoManager from "./ServicoManager";
import TelefoneManager from "./TelefoneManager";

export default class ClienteManager {
    public static NovoCliente(): Cliente {
        console.log("Cadastro de cliente:");
        const nome = IOManager.GetString("Nome");
        const nomeSocial = IOManager.GetString("Nome social");
        const genero = IOManager.GetString("Genero").toUpperCase();
        const CPF = CPFManager.NovoCPF();
        const RGs = this.GetRGs();
        const dataCadastro = new Date(Date.now());
        const telefones = this.GetTelefones();
        const produtosConsumidos = this.GetProdutos();
        const servicosConsumidos = this.GetServicos();

        return new Cliente(
            nome,
            nomeSocial,
            genero,
            CPF,
            RGs,
            dataCadastro,
            telefones,
            produtosConsumidos,
            servicosConsumidos
        );
    }

    private static GetRGs(): Array<RG> {
        const RGs: Array<RG> = [];
        do{
            RGs.push(RGManager.NovoRG());
        } while(IOManager.GetBool("Adicionar outro RG?"));
        return RGs;
    }

    private static GetTelefones(): Array<Telefone> {
        const telefones: Array<Telefone> = [];
        do{
            telefones.push(TelefoneManager.NovoTelefone());
        } while(IOManager.GetBool("Adicionar outro telefone?"));
        return telefones;
    }

    private static GetProdutos(): Array<Produto> {
        const produtos: Array<Produto> = [];
        if(!IOManager.GetBool("Adicionar produtos já consumidos?")){
            return produtos;
        }

        do{
            produtos.push(ProdutoManager.NovoProduto());
        } while(IOManager.GetBool("Adicionar outro produto?"));
        return produtos;
    }

    private static GetServicos(): Array<Servico> {
        const servicos: Array<Servico> = [];
        if(!IOManager.GetBool("Adicionar servicos já consumidos?")){
            return servicos;
        }

        do{
            servicos.push(ServicoManager.NovoServico());
        } while(IOManager.GetBool("Adicionar outro servico?"));
        return servicos;
    }
}