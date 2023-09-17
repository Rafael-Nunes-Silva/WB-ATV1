import IOManager from "../IO/IOManager";
import Cliente from "../Models/Cliente";
import Produto from "../Models/Produto";
import RG from "../Models/RG";
import Servico from "../Models/Servico";
import Telefone from "../Models/Telefone";

export default class ClienteManager {
    public static NovoCliente(): Cliente {
        const nome = IOManager.GetString("Nome");
        const nomeSocial = IOManager.GetString("Nome social");
        const CPF = IOManager.GetCPF("CPF");
        const RGs = this.GetRGs();
        const dataCadastro = new Date(Date.now());
        const telefones = this.GetTelefones();
        const produtosConsumidos = this.GetProdutos();
        const servicosConsumidos = this.GetServicos();

        return new Cliente(
            nome,
            nomeSocial,
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
            RGs.push(IOManager.GetRG("Insira o RG"));
        } while(IOManager.GetBool("Adicionar outro RG?"));
        return RGs;
    }

    private static GetTelefones(): Array<Telefone> {
        const telefones: Array<Telefone> = [];
        do{
            telefones.push(IOManager.GetTelefone("Insira o telefone"));
        } while(IOManager.GetBool("Adicionar outro telefone?"));
        return telefones;
    }

    private static GetProdutos(): Array<Produto> {
        const produtos: Array<Produto> = [];
        if(!IOManager.GetBool("Adicionar produtos já consumidos?")){
            return produtos;
        }

        do{
            produtos.push(IOManager.GetProduto("Insira o codigo do produto"));
        } while(IOManager.GetBool("Adicionar outro produto?"));
        return produtos;
    }

    private static GetServicos(): Array<Servico> {
        const servicos: Array<Servico> = [];
        if(!IOManager.GetBool("Adicionar servicos já consumidos?")){
            return servicos;
        }

        do{
            servicos.push(IOManager.GetServico("Insira o codigo do servico"));
        } while(IOManager.GetBool("Adicionar outro servico?"));
        return servicos;
    }
}