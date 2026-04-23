# Simple Chat

Um chat simples construído com **Next.js** e **React Context API**, onde você pode simular conversas entre você e um bot.

## 🚀 Funcionalidades

- **Defina seu nome** - Configure seu nome de usuário
- **Controle o bot** - Você também digita as mensagens do "bot"
- **Histórico de mensagens** - Veja toda a conversa em ordem cronológica
- **Persistência** - O histórico é salvo no localStorage e permanece após recarregar a página

## 🛠️ Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Context API** - Gerenciamento de estado global
- **Tailwind CSS** - Estilização

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── context/
│   │   ├── ChatContext.tsx    # Context para mensagens do chat
│   │   └── UserContext.tsx    # Context para dados do usuário
│   ├── page.tsx               # Página principal
│   └── layout.tsx             # Layout da aplicação
├── types/
│   └── Message.ts             # Tipo TypeScript para mensagens
```

## 🔧 Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 💡 Como Usar

1. **Configure seu nome** - Digite seu nome no campo apropriado
2. **Configure o nome do bot** - Defina um nome para o "bot"
3. **Envie mensagens** - Escolha quem está falando (você ou o bot) e digite a mensagem
4. **Veja o histórico** - Todas as mensagens aparecem na lista de conversa

## 📝 Conceitos Aprendidos

Este projeto demonstra:

- **React Context API** - Compartilhamento de estado entre componentes sem props drilling
- **useState** - Gerenciamento de estado local
- **localStorage** - Persistência de dados no navegador
- **TypeScript** - Tipagem de dados e interfaces
- **Next.js App Router** - Estrutura de páginas e layouts

## 📄 Licença

MIT