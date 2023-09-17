import promptSync from 'prompt-sync';

const prompt = promptSync();

export default class IOManager{
    public static GetString(msg: string, errorMsg: string = "\n"): string{
        const input = prompt(msg);
        if(!input){
            console.log(errorMsg);
            return this.GetString(msg);
        }
        return input.toString();
    }

    public static GetInt(msg: string, errorMsg: string = "\n"): Number {
        const input = prompt(msg);
        if(!input){
            console.log(errorMsg);
            return this.GetInt(msg);
        }
        return parseInt(input);
    }

    public static GetFloat(msg: string, errorMsg: string = "\n"): Number {
        const input = prompt(msg);
        if(!input){
            console.log(errorMsg);
            return this.GetFloat(msg);
        }
        return parseFloat(input);
    }
}