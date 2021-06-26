/*
    Ser autenticável, é ter a propriedade "senha", 
    no caso podendo ser o metodo get, 
    que temos em Funcionario e em Cliente.
    Isto é o que nos permite usa diferentes classes,
    dentro de SistemaAutenticacao, caracteristica do polimorfismo.

    Ou no outro exemplo:

    Ser autenticável, é ter o metodo "autenticar"
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){ 
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
            // return autenticavel.senha == senha;
        }       
        return false;
    }

    // verifica se o metodo "autenticar" existe dentro da classe passada como autenticavel
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function;
    }
}