# Parrot-Card-Game

# Projeto #04 - Parrot Card Game

# Descrição

Seu segundo projeto com JavaScript será a implementação do jogo Parrot Card Game, um jogo da memória temático com aleatoridade, efeitos e transição, responsividade e papagaios dançantes!

# Requisitos

- Geral
    - [X]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro
    - [X]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público
    - [ ]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu
- Layout
    - [X]  Aplicar layout para desktop e mobile, seguindo figma abaixo
    
    [Parrot Card Game](https://www.figma.com/file/EBizkrjH73Ku9fmib49Hlm/Parrot-Card-Game?node-id=0%3A1)
    
- Distribuição de cartas
    - [X]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)
    - [X]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido, até que o usuário coloque um número válido.
    - [X]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória
        
        **Dica**: para embaralhar uma array, utilize o código abaixo:
        
        ```jsx
        minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
        
        // Esta função pode ficar separada do código acima, onde você preferir
        function comparador() { 
        	return Math.random() - 0.5; 
        }
        ```
        
- Clique na carta
    - [X]  Ao clicar em uma carta, a mesma deve ser virada
    - [X]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta
    - [X]  Caso seja a segunda carta virada, existem 2 situações:
        - [X]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo
        - [X]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente
    - [X]  **Dica**: se quiser fazer o efeito 3D da carta virando, você pode ver o CSS necesśario em: [https://repl.it/@BootcampRespond/FlippedCards#index.html](https://repl.it/@BootcampRespond/FlippedCards#index.html) . Só se atente que nesse exemplo a carta vira ao passar o mouse. No caso do jogo, seria ao clicar.
- Fim do Jogo
    - [X]  Quando o usuário terminar de virar todas as cartas corretamente, **deverá** ser exibido um `alert` com a mensagem **"Você ganhou em X jogadas!"** sendo X **a quantidade de vezes que o usuário virou uma carta no jogo**.
        
        Ou seja: **cada clique é uma jogada**. Não é virar duas cartas que é uma jogada.
        

# Bônus (opcional)

- [X]  Coloque um relógio no topo superior direito da tela, contando quantos segundos já passaram desde o início do jogo. Ao final, informe na mensagem de vitória a quantidade de segundos.
- [X]  Ao final do jogo, pergunte com um **prompt** se o usuário gostaria de reiniciar a partida. Se ele responder sim, comece novamente o jogo perguntando a quantidade de cartas. O prompt deve receber as strings “**sim**” e “**não**”, com todas as letras minúsculas e acentuação correta.
    
    Esse prompt não deveria aceitar "s", "S", "n", "N" ou qualquer variação com letrais maiúsculas ou minúsculas.