import promptSync from 'prompt-sync';
import RG from '../Models/RG';
import CPF from '../Models/CPF';
import Telefone from '../Models/Telefone';

const prompt = promptSync();

export default class IOManager {
    public static GetString(msg: string, errorMsg: string = "\n"): string {
        const input = prompt(`${msg}: `);
        if(!input){
            console.log(errorMsg);
            return this.GetString(msg, errorMsg);
        }
        return input.toString();
    }

    public static GetInt(msg: string, errorMsg: string = "\n"): Number {
        const input = prompt(`${msg}: `);
        if(!input){
            console.log(errorMsg);
            return this.GetInt(msg, errorMsg);
        }
        return parseInt(input);
    }

    public static GetFloat(msg: string, errorMsg: string = "\n"): Number {
        const input = prompt(`${msg}: `);
        if(!input){
            console.log(errorMsg);
            return this.GetFloat(msg, errorMsg);
        }
        return parseFloat(input);
    }

    public static GetBool(msg: string, ySymbol: string = "S", nSymbol: string = "N", errorMsg: string = "\n"): Boolean {
        const input = prompt(`${msg} (${ySymbol}/${nSymbol}): `);
        if(!input){
            console.log(errorMsg);
            return this.GetBool(msg, ySymbol, nSymbol, errorMsg);
        }

        switch(input){
            case ySymbol:
                return true;
            case nSymbol:
                return false;
            default:
                return this.GetBool(msg, ySymbol, nSymbol, errorMsg);
        }
    }

    public static GetDate(msg: string, dateOrder: string = "dma", dateSeparator: string = "/", errorMsg: string = "\n"): Date {
        const dateFormatString = dateOrder[0] + dateSeparator + dateOrder[1] + dateSeparator + dateOrder[2];

        const input = prompt(`${msg} (${dateFormatString}): `).split(dateSeparator);
        if(!input){
            console.log(errorMsg);
            return this.GetDate(msg, dateOrder, dateSeparator, errorMsg);
        }

        const ano = input[dateOrder.toLowerCase().indexOf("a")];
        const mes = input[dateOrder.toLowerCase().indexOf("m")];
        const dia = input[dateOrder.toLowerCase().indexOf("d")];

        return new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));
    }

    public static GetRG(msg: string, errorMsg: string = "\n"): RG {
        console.log(msg);
        try {
            return new RG(
                this.GetString("Insira o RG", "RG inválido"),
                this.GetDate("Insira a data de emissão", "dma", "/", "Data inválida")
            );
        }
        catch {
            console.log(errorMsg);
            return this.GetRG(msg, errorMsg);
        }
    }

    public static GetCPF(msg: string, errorMsg: string = "\n"): CPF {
        console.log(msg);
        try {
            let valor;
            do {
                valor = prompt("Insira os númros do CPF (apenas números): ");
            } while(valor.length != 11);
    
            return new CPF(
                valor,
                this.GetDate("Insira a data de emissão", "dma", "/", "Data inválida")
            );
        }
        catch {
            console.log(errorMsg);
            return this.GetCPF(msg, errorMsg);
        }
    }

    public static GetTelefone(msg: string, errorMsg: string = "\n"): Telefone {
        console.log(msg);
        try {
            const ddd = this.GetString("Insira o DDD", "DDD inválido");

            let numero;
            do {
                numero = prompt("Insira o número (apenas números): ");
            } while(numero.length != 11);

            return new Telefone(ddd, numero);
        }
        catch {
            console.log(errorMsg);
            return this.GetTelefone(msg, errorMsg);
        }
    }
}