import ClienteManager from "../Business/ClienteManager";
import Empresa from "../Business/Empresa";
import IOManager from "../IO/IOManager";
import Cliente from "../Models/Cliente";
import RG from "../Models/RG";
import Telefone from "../Models/Telefone";

class Opcao {
    msg: string;
    func: Function;

    constructor(msg: string, func: Function) {
        this.msg = msg;
        this.func = func;
    }
}

class Menu {
    titulo: string;
    opcoes: Array<Opcao>;

    constructor(titulo: string, opcoes: Array<Opcao>) {
        this.titulo = titulo;
        this.opcoes = opcoes;
    }

    public Display() {
        console.log(`\n\n\n${this.titulo}:`);

        for (let i = 0; i < this.opcoes.length; i++) {
            console.log(`${i} - ${this.opcoes[i].msg}`)
        }

        let escolha = -1;
        do {
            escolha = IOManager.GetInt("Escolha")
        } while (escolha < 0 || escolha >= this.opcoes.length);

        this.opcoes[escolha].func();
    }
}

const MENU_CLIENTE_LISTAGEM = new Menu(
    "Listagem de Clientes",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_CLIENTE;
            }
        ),
        new Opcao(
            "Listar Todos",
            function() {
                console.log(
                    ClienteManager.MontarStringListagem(
                        Empresa.GetClientes
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Produtos (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram produtos (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoProdutoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Produtos (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram produtos (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoProdutoVal(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Produtos (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram produtos (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoProdutoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Produtos (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram produtos (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoProdutoVal(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Serviços (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram serviços (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoServicoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Top X por Consumo de Serviços (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que mais consumiram serviços (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetTopXClientesConsumoServicoVal(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Serviços (Quantidade)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram serviços (Quantidade)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoServicoQtd(qtd)
                    )
                );
            }
        ),
        new Opcao(
            "Listar Sub X por Consumo de Serviços (Valor)",
            function() {
                const qtd = IOManager.GetInt("Quantidade (X)");
                console.log(
                    `\n\n${qtd} clientes que menos consumiram serviços (Valor)\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.GetSubXClientesConsumoServicoVal(qtd)
                    )
                );
            }
        ),



        new Opcao(
            "Listar por Genero",
            function() {
                const genero = IOManager.GetString("Genero");
                console.log(
                    `\n\nClientes do genero ${genero}\n` + 
                    ClienteManager.MontarStringListagem(
                        Empresa.ClientesDoGenero(genero)
                    )
                );
            }
        )
    ]
);

const MENU_CLIENTE = new Menu(
    "Clientes",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_PRINCIPAL;
            }
        ),
        new Opcao(
            "Cadastrar",
            function() {
                Empresa.AdicionarCliente(
                    ClienteManager.NovoCliente()
                );
            }
        ),
        new Opcao(
            "Listagem",
            function() {
                menuAtual = MENU_CLIENTE_LISTAGEM;
            }
        ),
        new Opcao(
            "Atualizar",
            function() {
                console.log("***Não implementado***");
                // console.log("Cadastro de cliente");
                // const nome = IOManager.GetString("Nome");
                // const nomeSocial = IOManager.GetString("Nome social");
                // const genero = IOManager.GetString("Genero").toUpperCase();
                // const CPF = CPFManager.NovoCPF();
                // const RGs = this.GetRGs();
                // const dataCadastro = new Date(Date.now());
                // const telefones = this.GetTelefones();
                // const produtosConsumidos = this.GetProdutos();
                // const servicosConsumidos = this.GetServicos();

                // return new Cliente(
                //     nome,
                //     nomeSocial,
                //     genero,
                //     CPF,
                //     RGs,
                //     dataCadastro,
                //     telefones,
                //     produtosConsumidos,
                //     servicosConsumidos
                // );
            }
        ),
        new Opcao(
            "Deletar",
            function() {
                console.log("***Não implementado***");
            }
        )
    ]
);

const MENU_SERVICO = new Menu(
    "Serviços",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_PRINCIPAL;
            }
        ),
        new Opcao(
            "Cadastrar",
            function() {
                console.log("***Não implementado***");
            }
        ),
        new Opcao(
            "Listar Todos",
            function() {
                console.log("***Não implementado***");
            }
        ),
        new Opcao(
            "Atualizar",
            function() {
                console.log("***Não implementado***");
            }
        ),
        new Opcao(
            "Deletar",
            function() {
                console.log("***Não implementado***");
            }
        )
    ]
);

const MENU_PRODUTO = new Menu(
    "Produtos",
    [
        new Opcao(
            "Voltar",
            function() {
                menuAtual = MENU_PRINCIPAL;
            }
        ),
        new Opcao(
            "Cadastrar",
            function() {
                console.log("***Não implementado***");
            }
        ),
        new Opcao(
            "Listar Todos",
            function() {
                console.log("***Não implementado***");
            }
        ),
        new Opcao(
            "Atualizar",
            function() {
                console.log("***Não implementado***");
            }
        ),
        new Opcao(
            "Deletar",
            function() {
                console.log("***Não implementado***");
            }
        )
    ]
);

const MENU_PRINCIPAL = new Menu(
    "World Beauty",
    [
        new Opcao(
            "Sair",
            function() {
                menuAtual = null;
            }
        ),
        new Opcao(
            "Cliente",
            function() {
                menuAtual = MENU_CLIENTE;
            }
        ),
        new Opcao(
            "Produto",
            function() {
                menuAtual = MENU_PRODUTO;
            }
        ),
        new Opcao(
            "Serviço",
            function() {
                menuAtual = MENU_SERVICO;
            }
        )
    ]
);

let menuAtual: Menu | null = MENU_PRINCIPAL;

export default class Terminal {
    public static Start() {
        while(menuAtual != null) {
            menuAtual.Display();
        }
    }
}