// filter
        // exp1
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter((valor) => valor < 5);
console.log(numerosFiltrados);

// exp2

const pessoa = [
  { nome: "Jean", idade: 23 },
  { nome: "Lucas", idade: 32 },
  { nome: "Souza", idade: 43 },
  { nome: "Araujo", idade: 53 },
];
const filtrarPessoa=pessoa.filter(obj=>obj.nome.length>4)
console.log(filtrarPessoa)

const filtrarPessoaComIdade=pessoa.filter(obj=>obj.idade >50)
console.log(filtrarPessoaComIdade)

