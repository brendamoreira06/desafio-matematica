# Desafio de Matemática

Jogo web desenvolvido para a Atividade Prática 1 — Desenvolvimento de Jogo Web, disciplina GAC116 - Programação Web.

## Objetivo do jogo

Resolver contas de matemática (soma, subtração e multiplicação) dentro do tempo limite, acumulando pontos até atingir 100 pontos.

## Regras do jogo

- Cada conta deve ser respondida em até **10 segundos**.
- Resposta correta: +10 pontos, e uma nova conta é gerada.
- Resposta incorreta ou tempo esgotado: perde 1 vida, e uma nova conta é gerada.
- O jogador começa com **3 vidas**.
- Vitória: atingir 100 pontos antes de perder todas as vidas.
- Derrota: perder as 3 vidas antes de atingir 100 pontos.
- É possível iniciar uma nova partida a qualquer momento após o fim do jogo.

## Controles

- Digite a resposta no campo numérico.
- Envie com o botão "Responder" ou pressionando Enter.

## Tecnologias utilizadas

- HTML5 (estrutura da página e formulário)
- CSS3 (estilização e layout)
- JavaScript puro (geração de contas, cronômetro, manipulação do DOM e eventos)

## Instalação / execução local

```bash
git clone https://github.com/brendamoreira06/desafio-matematica.git
cd desafio-matematica
```

Abra o arquivo `index.html` em qualquer navegador.

## Versão publicada (GitHub Pages)

> https://brendamoreira06.github.io/desafio-matematica/

*(Atualize este link após publicar no GitHub Pages.)*

## Licença

Este projeto está licenciado sob a licença MIT — veja o arquivo LICENSE.

## Informações da atividade

```json
{
  "nome": "Desafio de Matematica",
  "descricao": "Jogo em HTML, CSS e JavaScript com contas de matematica geradas aleatoriamente, cronometro por pergunta, pontuacao e vidas.",
  "autores": "Brenda Moreira da Silva",
  "turma": "14B"
}
```
