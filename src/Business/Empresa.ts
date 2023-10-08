import CPF from "../Models/CPF";
import Cliente from "../Models/Cliente";
import Produto from "../Models/Produto";
import Servico from "../Models/Servico";

export default class Empresa {
    private static clientes: Array<Cliente> = new Array<Cliente>(0);
    private static produtos: Array<Produto> = new Array<Produto>(0);
    private static servicos: Array<Servico> = new Array<Servico>(0);

    public static AdicionarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }
    public static AdicionarProduto(produto: Produto) {
        this.produtos.push(produto);
    }
    public static AdicionarServico(servico: Servico) {
        this.servicos.push(servico);
    }

    public static DeletarCliente(cpf: CPF) {
        for(let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].GetCPF == cpf) {
                this.clientes.filter((cliente) => { return cliente.GetCPF != cpf });
            }
        }
    }
    public static DeletarProduto(nome: string) {
        for(let i = 0; i < this.produtos.length; i++) {
            if(this.produtos[i].GetNome == nome) {
                this.produtos.filter((produto) => { return produto.GetNome != nome });
            }
        }
    }
    public static DeletarServico(nome: string) {
        for(let i = 0; i < this.servicos.length; i++) {
            if(this.servicos[i].GetNome == nome) {
                this.servicos.filter((servico) => { return servico.GetNome != nome });
            }
        }
    }

    public static get GetClientes() {
        return this.clientes;
    }

    public static get GetProdutos() {
        return this.produtos;
    }
    
    public static get GetSericos() {
        return this.servicos;
    }

    public static GetTopXClientesConsumoProdutoQtd(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                return a.GetProdutosConsumidos.length - b.GetProdutosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetTopXClientesConsumoProdutoVal(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetProdutosConsumidos.forEach(
                    function(produto: Produto) {
                        valA += produto.GetValor;
                    }
                )

                let valB = 0;
                b.GetProdutosConsumidos.forEach(
                    function(produto: Produto) {
                        valB += produto.GetValor;
                    }
                )

                return valA - valB;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoProdutoQtd(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                return b.GetProdutosConsumidos.length - a.GetProdutosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoProdutoVal(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetProdutosConsumidos.forEach(
                    function(produto: Produto) {
                        valA += produto.GetValor;
                    }
                )

                let valB = 0;
                b.GetProdutosConsumidos.forEach(
                    function(servico: Produto) {
                        valB += servico.GetValor;
                    }
                )

                return valB - valA;
            }
        ).slice(0, qtd);
    }
    
    public static GetTopXClientesConsumoServicoQtd(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                return a.GetServicosConsumidos.length - b.GetServicosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetTopXClientesConsumoServicoVal(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetServicosConsumidos.forEach(
                    function(servico: Servico) {
                        valA += servico.GetValor;
                    }
                )

                let valB = 0;
                b.GetServicosConsumidos.forEach(
                    function(servico: Servico) {
                        valB += servico.GetValor;
                    }
                )

                return valA - valB;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoServicoQtd(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                return b.GetServicosConsumidos.length - a.GetServicosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoServicoVal(qtd: number): Array<Cliente> {
        return this.clientes.sort(
            function(a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetServicosConsumidos.forEach(
                    function(servico: Servico) {
                        valA += servico.GetValor;
                    }
                )

                let valB = 0;
                b.GetServicosConsumidos.forEach(
                    function(servico: Servico) {
                        valB += servico.GetValor;
                    }
                )

                return valB - valA;
            }
        ).slice(0, qtd);
    }

    public static ClientesDoGenero(genero: string): Array<Cliente> {
        const clientes = Array<Cliente>(0);

        this.clientes.forEach(
            function(cliente: Cliente, index: number) {
                if (cliente.GetGenero == genero.toUpperCase()) {
                    clientes.push(cliente);
                }
            }
        );

        return clientes;
    }
}