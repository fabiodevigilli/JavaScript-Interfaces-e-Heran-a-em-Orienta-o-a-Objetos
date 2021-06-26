import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;    
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    teste() {
        super.teste();
        console.log("Teste na classe Conta Corrente");
    }

    // Sobreescrevendo o comportamento de sacar da classe Conta
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
