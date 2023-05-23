# Relógio Countdown

Este é um projeto de um relógio estilo countdown que mostra o tempo restante até uma data específica. Ele exibe os anos, meses, semanas, dias, horas, minutos e segundos restantes de forma animada.

## Pré-requisitos

- Navegador da web moderno

## Como usar

1. Clone ou faça o download deste repositório.

git clone https://github.com/eliasoliveeira/clock.git

2. Navegue até o diretório do projeto.

3. Abra o arquivo `index.html` em seu navegador da web.

4. O relógio começará a ser exibido com o tempo restante até uma data específica. Por padrão, a data-alvo é definida como '2023-12-31'. Você pode modificar a data-alvo no arquivo `script.js`, substituindo a linha abaixo com a data (aaaa/mm/dd) desejada:

```javascript
const alvo = new Date('2023-12-31');
```