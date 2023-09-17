import IOManager from "../IO/IOManager";
import Telefone from "../Models/Telefone";

export default class TelefoneManager {
    public static NovoTelefone(): Telefone {
        console.log("Cadastro de telefone:")
        const ddd = IOManager.GetString("Insira o DDD", "DDD inválido");

        let numero;
        do {
            numero = IOManager.GetString("Insira o número (apenas números): ");
        } while(numero.length != 11);

        return new Telefone(ddd, numero);
    }
}