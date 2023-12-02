// import Empresa from "../Business/Empresa";
import Empresa from "./EmpresaBack";
import CPF from "../Models/CPF";
import Cliente from "../Models/Cliente";
import Produto from "../Models/Produto";
import RG from "../Models/RG";
import Servico from "../Models/Servico";
import Telefone from "../Models/Telefone";

class APICliente {
    static AdicionarCliente(
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
        Empresa.AdicionarCliente(
            new Cliente(
                nome,
                nomeSocial,
                genero,
                CPF,
                RGs,
                dataCadastro,
                telefones,
                produtosConsumidos,
                servicosConsumidos
            )
        );
    }

    static GetClientes(): Array<Cliente> {
        return Empresa.GetClientes;
    }

    static GetTopXClientesConsumoProdutoQtd(qtd: number): Array<Cliente> {
        return Empresa.GetTopXClientesConsumoProdutoQtd(qtd);
    }
    static GetTopXClientesConsumoProdutoVal(qtd: number): Array<Cliente> {
        return Empresa.GetTopXClientesConsumoProdutoVal(qtd);
    }

    static GetSubXClientesConsumoProdutoQtd(qtd: number): Array<Cliente> {
        return Empresa.GetSubXClientesConsumoProdutoQtd(qtd);
    }
    static GetSubXClientesConsumoProdutoVal(qtd: number): Array<Cliente> {
        return Empresa.GetSubXClientesConsumoProdutoVal(qtd);
    }

    static GetTopXClientesConsumoServicoQtd(qtd: number): Array<Cliente> {
        return Empresa.GetTopXClientesConsumoServicoQtd(qtd);
    }
    static GetTopXClientesConsumoServicoVal(qtd: number): Array<Cliente> {
        return Empresa.GetTopXClientesConsumoServicoVal(qtd);
    }

    static GetSubXClientesConsumoServicoQtd(qtd: number): Array<Cliente> {
        return Empresa.GetSubXClientesConsumoServicoQtd(qtd);
    }
    static GetSubXClientesConsumoServicoVal(qtd: number): Array<Cliente> {
        return Empresa.GetSubXClientesConsumoServicoVal(qtd);
    }

    static ClientesDoGenero(genero: string): Array<Cliente> {
        return Empresa.ClientesDoGenero(genero);
    }

    static Atualizar(
        cpf: CPF,
        nome: string,
        nomeSocial: string,
        genero: string,
        RGs: Array<RG>,
        telefones: Array<Telefone>
    ) {
        Empresa.AtualizarCliente(cpf, nome, nomeSocial, genero, RGs, telefones);
    }

    static Deletar(cpf: CPF) {
        Empresa.DeletarCliente(cpf);
    }
}

class APICPF {
    static NovoCPF(numeros: string, dataEmissao: Date): CPF {
        return new CPF(numeros, dataEmissao);
    }
}

class APIProduto {
    static AdicionarProduto(nome: string, valor: number) {
        Empresa.AdicionarProduto(
            new Produto(nome, valor)
        );
    }

    static GetProdutos(): Array<Produto> {
        return Empresa.GetProdutos;
    }

    static Atualizar(nome: string, valor: number) {
        Empresa.AtualizarProduto(nome, valor);
    }

    static Deletar(nome: string) {
        Empresa.DeletarProduto(nome);
    }
}

class APIRG {
    static NovoRG(numeros: string, dataEmissao: Date): RG {
        return new RG(numeros, dataEmissao);
    }
}

class APIServico {
    static AdicionarServico(nome: string, valor: number) {
        Empresa.AdicionarServico(
            new Servico(nome, valor)
        );
    }

    static GetServicos(): Array<Servico> {
        return Empresa.GetServicos;
    }

    static Atualizar(nome: string, valor: number) {
        Empresa.AtualizarServico(nome, valor);
    }

    static Deletar(nome: string) {
        Empresa.DeletarServico(nome);
    }
}

class APITelefone {
    static NovoTelefone(ddd: string, numero: string): Telefone {
        return new Telefone(ddd, numero);
    }
}

export = {
    APICliente,
    APICPF,
    APIProduto,
    APIRG,
    APIServico,
    APITelefone
};
