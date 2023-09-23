import IOManager from "../IO/IOManager";

class Opcao{
    msg: string;
    func: Function;

    constructor(msg: string, func: Function) {
        this.msg = msg;
        this.func = func;
    }
}

class Menu{
    opcoes: Array<Opcao>;
    sair: boolean = false;

    constructor(opcoes: Array<Opcao>){
        this.opcoes = opcoes;
    }

    public Display(){
        for(let i = 0; i < this.opcoes.length; i++){
            console.log(`${i} - ${this.opcoes[i].msg}`)
        }

        let escolha = -1;
        do{
            escolha = IOManager.GetInt("Escolha: ")
        } while (escolha < 0 || escolha >= this.opcoes.length);

        this.opcoes[escolha].func();
    }
}

const MENU_CLIENTE = new Menu([
    {
        msg: "Voltar",
        func: function(){
            menuAtual = MENU_PRINCIPAL;
        }
    },
    {
        msg: "Cadastrar",
        func: function(){
            
        }
    },
    {
        msg: "Listar",
        func: function(){
            
        }
    },
    {
        msg: "Atualizar",
        func: function(){
            
        }
    },
    {
        msg: "Deletar",
        func: function(){
            
        }
    }
]);

const MENU_SERVICO = new Menu([
    {
        msg: "Voltar",
        func: function(){
            menuAtual = MENU_PRINCIPAL;
        }
    },
    {
        msg: "Cadastrar",
        func: function(){
            
        }
    },
    {
        msg: "Listar",
        func: function(){
            
        }
    },
    {
        msg: "Atualizar",
        func: function(){
            
        }
    },
    {
        msg: "Deletar",
        func: function(){
            
        }
    }
]);

const MENU_PRODUTO = new Menu([
    {
        msg: "Voltar",
        func: function(){
            menuAtual = MENU_PRINCIPAL;
        }
    },
    {
        msg: "Cadastrar",
        func: function(){
            
        }
    },
    {
        msg: "Listar",
        func: function(){
            
        }
    },
    {
        msg: "Atualizar",
        func: function(){
            
        }
    },
    {
        msg: "Deletar",
        func: function(){
            
        }
    }
]);

const MENU_PRINCIPAL = new Menu([
    new Opcao(
        "Sair",
        function(){
            menuAtual = null;
        }
    ),
    new Opcao(
        "Cliente",
        function(){
            menuAtual = MENU_CLIENTE;
        }
    ),
    new Opcao(
        "Serviço",
        function(){
            menuAtual = MENU_SERVICO;
        }
    ),
    new Opcao(
        "Produto",
        function(){
            menuAtual = MENU_PRODUTO;
        }
    )
]);

let menuAtual: Menu | null = MENU_PRINCIPAL;

export default class Terminal{
    public static Start(){
        while(menuAtual != null){
            menuAtual.Display();
        }
    }
}