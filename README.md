# 💕 Contador do Nosso Amor

Um site romântico e interativo que conta o tempo desde o início do seu namoro, com música de fundo, foto especial e design moderno.

![Contador Romântico](https://img.shields.io/badge/Status-Ativo-brightgreen)


## ✨ Características

- **Contador em tempo real** - Anos, meses, dias, horas, minutos e segundos
- **Música automática** - Toca automaticamente quando o site carrega
- **Foto especial** - Exibe uma foto de vocês com efeitos visuais
- **Design responsivo** - Funciona perfeitamente em celular e computador
- **Animações especiais** - Corações flutuantes e efeitos visuais
- **Mensagem personalizada** - Texto romântico com efeito de digitação

## 🚀 Como usar

### 1. Personalizar a data do início do namoro

Abra o arquivo `script.js` e altere a linha 2:

```javascript
const startDate = new Date('2024-05-21T03:00:00'); // Sua data aqui!
```

**Exemplos de datas:**
- 15 de março de 2023 às 14:30: `'2023-03-15T14:30:00'`
- 1 de janeiro de 2024 às 00:00: `'2024-01-01T00:00:00'`
- 10 de dezembro de 2022 às 20:15: `'2022-12-10T20:15:00'`

### 2. Adicionar sua foto

1. Coloque uma foto de vocês na pasta do projeto
2. Renomeie para `foto.jpg`
3. Ou altere o nome no arquivo `index.html` linha 25

### 3. Adicionar música romântica

1. Coloque um arquivo de música na pasta do projeto
2. Renomeie para o nome do seu arquivo (ex: `Luan Santana - Tudo que você quiser.mp3`)
3. Atualize o nome no arquivo `index.html` linha 65

### 4. Personalizar a mensagem

Altere a mensagem no arquivo `index.html` linha 58:
```html
<p class="love-message">Sua mensagem romântica aqui ❤️</p>
```

## 🎨 Personalizações

### Mudar cores
No arquivo `style.css`, altere as cores do gradiente de fundo na linha 8:
```css
background: linear-gradient(135deg, #ff6b9d, #c44569, #f093fb);
```

### Mudar fontes
Você pode alterar as fontes importadas no `index.html` linha 7:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
```

## 📱 Como visualizar

1. Abra o arquivo `index.html` no seu navegador
2. Ou use um servidor local para melhor experiência

### Usando Python:
```bash
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

### Usando Node.js:
```bash
npx serve .
```

## 🎉 Funcionalidades especiais

- **Corações flutuantes** - Aparecem automaticamente
- **Efeito confete** - Quando a página carrega
- **Animação dos números** - Quando mudam
- **Efeito de digitação** - Na mensagem romântica
- **Botão de música** - Para controlar a trilha sonora
- **Autoplay inteligente** - Tenta tocar música automaticamente

## 🛠️ Tecnologias utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e animações
- **JavaScript** - Lógica do contador e funcionalidades
- **Google Fonts** - Fontes Inter e Quicksand

## 📝 Licença

Este projeto é de uso livre para fins pessoais e românticos! 💕

## 🤝 Contribuições

Sinta-se à vontade para fazer um fork e personalizar para seu próprio uso!

---

**Feito com ❤️ para celebrar o amor!** 
