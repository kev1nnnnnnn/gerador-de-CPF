import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {  

    //verifica um número aleatório entre o valor min e o valor max
    rand(min = 100000000, max = 999999999) {
        
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    
    //método que formatará o cpf.
    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        )
    }

    //função onde será gerado um novo CPF, metodo atrelado a classe ValidaCPF
    geraNovoCpf() {
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        const novoCpf = cpfSemDigitos + digito1 + digito2;
        return this.formatado(novoCpf);
    }
    
}

