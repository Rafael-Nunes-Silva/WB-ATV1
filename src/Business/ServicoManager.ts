import IOManager from "../IO/IOManager";
import Servico from "../Models/Servico";

export default class ServicoManager {
    public static NovoServico(): Servico {
        console.log("Cadastro de serviço:")
        const nome = IOManager.GetString("Nome");
        const valor = IOManager.GetFloat("Valor");

        return new Servico(nome, valor);
    }
}