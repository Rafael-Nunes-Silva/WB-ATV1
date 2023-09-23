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
        console.log("Cadastro de cliente");
        const nome = IOManager.GetString("Nome");
        const nomeSocial = IOManager.GetString("Nome social");
        const genero = IOManager.GetString("Genero").toUpperCase();
        const CPF = CPFManager.NovoCPF();
        const RGs = this.GetRGs;
        const dataCadastro = new Date(Date.now());
        const telefones = this.GetTelefones;
        const produtosConsumidos = this.GetProdutos;
        const servicosConsumidos = this.GetServicos;

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

    private static get GetRGs(): Array<RG> {
        const RGs: Array<RG> = [];
        do {
            RGs.push(RGManager.NovoRG());
        } while(IOManager.GetBool("Adicionar outro RG?"));
        return RGs;
    }

    private static get GetTelefones(): Array<Telefone> {
        const telefones: Array<Telefone> = [];
        do {
            telefones.push(TelefoneManager.NovoTelefone());
        } while(IOManager.GetBool("Adicionar outro telefone?"));
        return telefones;
    }

    private static get GetProdutos(): Array<Produto> {
        const produtos: Array<Produto> = [];
        if (!IOManager.GetBool("Adicionar produtos já consumidos?")) {
            return produtos;
        }

        do {
            produtos.push(ProdutoManager.NovoProduto());
        } while(IOManager.GetBool("Adicionar outro produto?"));
        return produtos;
    }

    private static get GetServicos(): Array<Servico> {
        const servicos: Array<Servico> = [];
        if (!IOManager.GetBool("Adicionar servicos já consumidos?")) {
            return servicos;
        }

        do {
            servicos.push(ServicoManager.NovoServico());
        } while(IOManager.GetBool("Adicionar outro servico?"));
        return servicos;
    }

    public static MontarStringListagem(clientes: Array<Cliente>): string {
        let listagem = "";

        clientes.forEach(
            function(cliente: Cliente) {
                listagem += `----------${cliente.GetNome}----------`;
                listagem += `\nNome Social: ${cliente.GetNomeSocial}`;
                listagem += `\nGenero: ${cliente.GetGenero}`;
                listagem += `\nCPF: ${cliente.GetCPF.GetValorFormatado}`;
                listagem += `\n\n----------RGs----------`;
                cliente.GetRGs.forEach(
                    function(rg: RG, index: number) {
                        listagem += `\n${index} - ${rg.GetValor}`;
                    }
                );
                listagem += `\nData de Cadastro: ${cliente.GetDataCadastro.toLocaleDateString()}`;
                listagem += `\n\n----------Telefones----------`;
                cliente.GetTelefones.forEach(
                    function(telefone: Telefone, index: number) {
                        listagem += `\n${index} - ${telefone.GetNumeroFormatado}`;
                    }
                );
            }
        );
        
        return listagem;
    }
}