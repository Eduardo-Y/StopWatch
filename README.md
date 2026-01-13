# ⏱️ StopWatch Project

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tech](https://img.shields.io/badge/JavaScript-Time--Management-blue)

Um cronômetro digital funcional e preciso, desenvolvido para praticar o controle de intervalos e a manipulação do tempo via código.

## 🎯 Objetivo do Projeto

O desenvolvimento deste cronômetro focou em resolver problemas comuns de lógica de programação:

-   **Controle de Intervalos:** Uso eficaz das funções `setInterval` e `clearInterval`.
-   **Lógica de Conversão:** Transformação de milissegundos em segundos, minutos e horas.
-   **Formatação de Dados:** Garantir que o tempo seja exibido no formato padrão `00:00:00` (padstart).
-   **Gestão de Estados:** Controlar o comportamento dos botões para evitar múltiplos intervalos rodando simultaneamente.

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Interface simples com display de tempo e controles.
-   **CSS3:** Estilização focada em legibilidade (fontes monoespaçadas para evitar que os números "pulem").
-   **JavaScript (ES6+):** Lógica principal de contagem e formatação.

## ⚙️ Funcionalidades

-   [x] **Iniciar (Start):** Inicia a contagem progressiva.
-   [x] **Pausar (Pause):** Interrompe o tempo mantendo o valor atual.
-   [x] **Reiniciar (Reset):** Zera o cronômetro e limpa os intervalos.
-   [x] **Precisão:** Contagem em tempo real com atualização constante do DOM.

---

## 🛠️ Como rodar o projeto

1. Clone este repositório:
    ```bash
    git clone [https://github.com/Eduardo-Y/StopWatch.git](https://github.com/Eduardo-Y/StopWatch.git)
    ```
2. Abra o arquivo index.html em seu navegador.

🧠 Desafios Vencidos

Um dos maiores desafios em cronômetros é impedir que, ao clicar várias vezes no botão "Iniciar", a velocidade da contagem aumente (acumulando intervalos). Este projeto resolve isso através da limpeza prévia de intervalos ou controle de estado do botão.

👨‍💻 Autor

Desenvolvido por Yoda — Dominando o tempo através do código.
