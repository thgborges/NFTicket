<p align="center">
  <img src="src/assets/hero-ticket.png" alt="NFTicket Logo" width="200" />
</p>

<h1 align="center">🎟️ NFTicket</h1>

<p align="center">
  <strong>Ingressos NFT para o futuro dos eventos</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Blockchain-ERC--721-F7931A?logo=ethereum&logoColor=white" />
  <img src="https://img.shields.io/badge/Rede-Sepolia-8B5CF6" />
</p>

---

## 📖 Sobre

**NFTicket** é uma plataforma SaaS Web3 para emissão, venda e revenda de ingressos em formato NFT (ERC-721), garantindo:

- 🔒 **Anti-Fraude** — Cada ingresso é um NFT único e verificável na blockchain
- 🔁 **Revenda Segura** — Marketplace oficial com royalties automáticos para organizadores
- 💼 **Propriedade Real** — O ingresso fica na wallet do usuário, sob seu controle total
- 📱 **Check-in Digital** — QR Code validado on-chain, rápido e sem filas

---

## 🖼️ Screenshots

<p align="center">
  ### Tela Principal
<img width="1603" height="755" alt="image" src="https://github.com/user-attachments/assets/d8dad4c9-fe00-4607-a0fa-9ab9fd0e0884" />

  ### Tela Eventos
<img width="1900" height="901" alt="image" src="https://github.com/user-attachments/assets/24c6f884-ef76-4cce-8bf6-7cc8fd11aea0" />

  ### Como Funciona
<img width="1903" height="895" alt="image" src="https://github.com/user-attachments/assets/960a799c-9ec8-4b3d-a118-c16d781acdd1" />

</p>

---

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────┐
│                  Frontend                    │
│         React + Vite + TailwindCSS           │
│          Framer Motion + shadcn/ui           │
├─────────────────────────────────────────────┤
│              Web3 Integration                │
│           MetaMask + Ethers.js               │
├─────────────────────────────────────────────┤
│               Blockchain                     │
│        Sepolia · ERC-721 · ERC-2981          │
├─────────────────────────────────────────────┤
│              Armazenamento                   │
│          IPFS (Pinata) · Metadata            │
└─────────────────────────────────────────────┘
```

---

## 🔄 Fluxo Principal

| Etapa | Descrição |
|-------|-----------|
| **01** | Empresa cria evento, gera NFTs ERC-721 e salva metadata no IPFS |
| **02** | Cliente conecta wallet, compra o NFT e recebe na carteira |
| **03** | Revenda no marketplace com royalties automáticos via smart contract |
| **04** | QR Code escaneado na entrada, validação on-chain, ingresso marcado como usado |

---

## 👥 Perfis de Usuário

### 👑 Administrador
- Aprovar/rejeitar empresas
- Definir taxas da plataforma
- Métricas e relatórios globais

### 🏢 Empresa (Organizadora)
- Cadastro e gestão de eventos
- Emissão de NFTs (lotes de ingressos)
- Scanner de check-in

### 👤 Cliente
- Login via MetaMask
- Compra e revenda de ingressos
- Visualização de NFTs e QR Code

---

## 🚀 Como Rodar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nfticket.git
cd nfticket

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## 🛠️ Tech Stack

| Tecnologia | Uso |
|------------|-----|
| **React 18** | Interface do usuário |
| **TypeScript 5** | Tipagem estática |
| **Vite 5** | Build tool |
| **Tailwind CSS 3** | Estilização |
| **shadcn/ui** | Componentes UI |
| **Framer Motion** | Animações |
| **React Router** | Roteamento SPA |
| **MetaMask** | Conexão de wallet |
| **Solidity (ERC-721)** | Smart contracts |
| **IPFS / Pinata** | Armazenamento descentralizado |

---

## 📁 Estrutura de Pastas

```
src/
├── assets/          # Imagens e assets estáticos
├── components/      # Componentes reutilizáveis
│   └── ui/          # shadcn/ui components
├── data/            # Dados mock
├── hooks/           # Custom hooks
├── lib/             # Utilitários
└── pages/           # Páginas da aplicação
    ├── Index.tsx     # Landing page
    ├── Events.tsx    # Listagem de eventos
    ├── EventDetail.tsx
    ├── Marketplace.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── Terms.tsx
    └── Privacy.tsx
```

---

## 💡 Diferenciais

- 🔒 Ingressos impossíveis de falsificar
- 🔁 Revenda oficial sem cambista
- 💸 Royalties automáticos para organizadores
- 🧾 Histórico completo de propriedade on-chain
- 🎯 Futuro: NFTs colecionáveis, experiências VIP, integração com patrocinadores

---

<p align="center">
  Feito com 💜 por <strong>NFTicket</strong>
</p>
