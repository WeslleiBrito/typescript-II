/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

import { CORES, TPessoa } from "../../types";

const pessoa1: TPessoa = {
  nome: "Maria",
  idade: 39,
  corFavorita: CORES.ANIL
}

const pessoa2: TPessoa = {
  nome: "Fernanda",
  idade: 35,
  corFavorita: CORES.AMARELO
}

const pessoa3: TPessoa = {
  nome: "Valmir",
  idade: 52,
  corFavorita: CORES.LARANJA
}

console.table(pessoa1)