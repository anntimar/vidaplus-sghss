# VidaPlus — SGHSS

Protótipo funcional de front-end para o **Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS)** da instituição fictícia VidaPlus. O projeto foi desenvolvido como atividade prática multidisciplinar do curso de Análise e Desenvolvimento de Sistemas.

> Todos os nomes, documentos e informações clínicas exibidos são fictícios e destinados exclusivamente à demonstração acadêmica.

## Demonstração online

Acesse o sistema publicado em **[anntimar.github.io/vidaplus-sghss](https://anntimar.github.io/vidaplus-sghss/)**.

## Sobre o projeto

A VidaPlus administra hospitais, clínicas, laboratórios e equipes de atendimento domiciliar. Esta aplicação demonstra como pacientes, profissionais de saúde e administradores podem acessar serviços integrados em uma interface única, responsiva e orientada à acessibilidade.

O desenvolvimento tem ênfase em front-end. Não há comunicação com um servidor ou banco de dados real: os dados da demonstração são simulados e os novos cadastros são armazenados localmente no navegador.

## Funcionalidades

- autenticação simulada com controle de acesso por perfil;
- dashboards específicos para paciente, profissional e administrador;
- cadastro e pesquisa de pacientes;
- validação de CPF, telefone, e-mail e campos obrigatórios;
- registro de consentimento para tratamento de dados conforme a LGPD;
- agenda semanal e criação de agendamentos;
- visualização de prontuário e registro de evolução clínica;
- fluxo simulado de atendimento por telemedicina;
- gestão de profissionais de saúde;
- indicadores gerenciais e informações de disponibilidade;
- persistência de pacientes e consultas com `localStorage`;
- interface responsiva para computadores, tablets e celulares;
- navegação por teclado, link de salto e regiões semânticas acessíveis;
- escape de conteúdo inserido pelo usuário antes da exibição em HTML.

## Tecnologias utilizadas

- HTML5 semântico;
- CSS3 responsivo;
- JavaScript moderno com módulos ES;
- Web Storage API (`localStorage` e `sessionStorage`);
- Node.js Test Runner para testes automatizados;
- Git e GitHub para versionamento.

O projeto não utiliza frameworks ou dependências de produção, deixando a execução simples e o código adequado para estudo.

## Como executar

### Pré-requisitos

- [Python 3](https://www.python.org/) instalado ou outro servidor HTTP local;
- navegador moderno, como Chrome, Edge ou Firefox.

Clone o repositório e acesse a pasta:

```bash
git clone https://github.com/anntimar/vidaplus-sghss.git
cd vidaplus-sghss
```

Inicie o servidor local:

```bash
npm start
```

Acesse [http://localhost:4173](http://localhost:4173) no navegador.

## Acessos de demonstração

| Perfil | E-mail | Senha |
|---|---|---|
| Paciente | `paciente@vidaplus.com` | `123456` |
| Profissional de saúde | `medico@vidaplus.com` | `123456` |
| Administrador | `admin@vidaplus.com` | `123456` |

Também é possível preencher cada acesso pelos botões disponíveis na tela de login. A senha é propositalmente simples porque a autenticação é apenas uma simulação acadêmica.

## Testes automatizados

Execute:

```bash
npm test
```

Os testes verificam autenticação, validação do cadastro de pacientes, validação de agendamentos e escape de conteúdo potencialmente inseguro.

## Estrutura do projeto

```text
SGHSS/
├── index.html          # Estrutura inicial e carregamento da aplicação
├── styles.css          # Design system, componentes e responsividade
├── app.js              # Telas, estado e interações do protótipo
├── core.js             # Autenticação, validações e utilitários
├── tests/
│   └── core.test.js    # Testes unitários
├── package.json        # Scripts de execução e testes
└── README.md
```

## Requisitos acadêmicos contemplados

| Área | Evidência prática |
|---|---|
| Pacientes | Cadastro, histórico, consultas, notificações e teleconsulta |
| Profissionais | Agenda, pacientes, prontuários e evolução clínica |
| Administração | Cadastros, indicadores, ocupação e relatórios |
| Telemedicina | Agendamento e sala segura simulada |
| Segurança e LGPD | Acesso por perfil, consentimento e escape de entradas |
| Usabilidade | Feedback visual, validações e navegação consistente |
| Acessibilidade | HTML semântico, foco visível e interface responsiva |
| Qualidade | Testes unitários automatizados |

## Limitações e possíveis evoluções

Como versão funcional mínima de front-end, o sistema não possui API, autenticação real, criptografia de banco de dados ou videochamada efetiva. Evoluções futuras incluem integração com back-end, banco PostgreSQL, autenticação com tokens, logs de auditoria, assinatura digital de receitas e serviço WebRTC para telemedicina.

## Autoria

Desenvolvido por **Maria Antônia** para fins acadêmicos.

## Licença

Este projeto está disponível para avaliação e estudo acadêmico. Os dados simulados não representam pacientes ou profissionais reais.
