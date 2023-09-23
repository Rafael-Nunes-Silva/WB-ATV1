import IOManager from "../IO/IOManager";
import Produto from "../Models/Produto";

export default class ProdutoManager {
    public static NovoProduto(): Produto {
        console.log("Cadastro de produto")
        const nome = IOManager.GetString("Nome");
        const valor = IOManager.GetFloat("Valor");

        return new Produto(nome, valor);
    }
}