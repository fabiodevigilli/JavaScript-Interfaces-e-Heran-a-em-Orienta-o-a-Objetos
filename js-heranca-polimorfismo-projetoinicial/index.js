import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

// Dois cliques para selecionar uma palavra, crtl+d, para acessar proxima referencia daquela palavra.

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123");
const cliente1 = new Cliente("Fulano", 11111111111, "456");


// Polimorfismo
const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456");
const estaLogadoGerente = SistemaAutenticacao.login(gerente, "123");
const estaLogadoCliente = SistemaAutenticacao.login(cliente1, "456");

console.log(`Diretor: ${estaLogadoDiretor}`);
console.log(`Gerente: ${estaLogadoGerente}`);
console.log(`Cliente1: ${estaLogadoCliente}`);
