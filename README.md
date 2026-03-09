# OptiFlow - MVP

Sistema de gestão para óticas com controle de clientes, agenda e atendimentos. Desenvolvido em 30 dias utilizando Clean Architecture.

## Tecnologias (Stack)
- **Monorepo:** Nx Workspace
- **Web Admin:** Angular (Standalone + Routing)
- **Mobile (App Interno):** React Native com Expo
- **Backend/Infraestrutura:** Supabase (PostgreSQL, Auth e Storage)

## Estrutura Atual (Semana 1 - Fundações)
Até o momento, a infraestrutura inicial foi estabelecida:
1. **Workspace Setup:** Configuração do monorepo Nx com Angular e Expo, e regras de Lint/Prettier globais.
2. **Core Domain (`@optiflow/core`):** Biblioteca isolada com as tipagens e interfaces puras de domínio (`Client`, `Appointment`, `UserProfile`).
3. **Infraestrutura (`@optiflow/supabase`):** Biblioteca de conexão ao backend Supabase com tipagem forte.
4. **Banco de Dados:** Tabelas e políticas de segurança (RLS) criadas no Supabase.

## Como configurar e rodar o projeto localmente

### 1. Instalação
Clone o repositório e instale as dependências:
```bash
npm install