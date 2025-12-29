# Desafio Técnico - Alfama Web (Landing Page Bônus)

Este repositório contém a **Tarefa Bônus** do processo seletivo para Desenvolvedor. Trata-se de uma Landing Page de alta conversão focada no mercado imobiliário, desenvolvida com tecnologias modernas e containerizada para fácil execução.

## 🚀 Sobre o Projeto

O objetivo foi criar uma página responsiva, com foco em UX/UI e captação de leads. A aplicação consiste em:

* **Frontend:** React + TypeScript (Vite) com Tailwind CSS para estilização rápida e responsiva.
* **Backend:** PHP 8.2 nativo para processamento de formulário via AJAX.
* **Email:** Integração com PHPMailer via SMTP (Gmail) para envio real de notificações.
* **Infraestrutura:** Docker e Docker Compose para orquestração do ambiente.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React 18, TypeScript, Tailwind CSS, Vite.
* **Backend:** PHP 8.2, PHPMailer.
* **DevOps:** Docker, Docker Compose (Multi-stage build).

## 🐳 Como Rodar o Projeto (Docker)

Para garantir que o ambiente seja replicado fielmente e sem conflitos de dependências, o projeto foi totalmente dockerizado.

### Pré-requisitos
* Docker e Docker Compose instalados na máquina.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPO.git](https://github.com/SEU-USUARIO/SEU-REPO.git)
    cd SEU-REPO
    ```

2.  **Configure as Variáveis de Ambiente:**
    O sistema de envio de e-mails precisa de credenciais SMTP válidas. Para segurança, estas não são versionadas.
    
    * Duplique o arquivo de exemplo:
        ```bash
        cp .env.example .env
        ```
    * Abra o arquivo `.env` gerado e preencha com suas credenciais (Recomendado: Senha de App do Gmail):
        ```ini
        SMTP_USER=seu-email@gmail.com
        SMTP_PASS=sua-senha-de-app-google
        ```

3.  **Execute a aplicação:**
    Suba o container (o build do React e a configuração do Apache/PHP são feitos automaticamente):
    ```bash
    docker-compose up --build
    ```
    ou

    ```bash
    docker compose up --build
    ```
4.  **Acesse o Projeto:**
    Abra seu navegador em: **[http://localhost:8080](http://localhost:8080)**

## 📂 Estrutura de Arquivos

Para facilitar a avaliação e o build, o projeto utiliza uma estrutura unificada onde o servidor web serve tanto os estáticos do React quanto os scripts PHP.

```text
/
├── components/       # Componentes React (Header, Features, LeadForm...)
├── PHPMailer/        # Biblioteca de envio de e-mail (Backend)
├── mail.php          # Script de processamento do formulário (Backend API)
├── Dockerfile        # Configuração da imagem (Node.js + PHP/Apache)
├── docker-compose.yml # Orquestrador dos serviços
├── .env.example      # Modelo de variáveis de ambiente
└── ...               # Arquivos de configuração do React (Vite, TSConfig)