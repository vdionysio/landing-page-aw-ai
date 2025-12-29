# --- ESTÁGIO 1: Build do Frontend ---
FROM node:18-alpine as builder

WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia TODO o resto do projeto (React + PHP + Configs)
COPY . .

# Compila o projeto React (Gera a pasta 'dist')
RUN npm run build

# --- ESTÁGIO 2: Servidor Web Final ---
FROM php:8.2-apache

# Instala dependências do sistema se necessário
RUN apt-get update && apt-get install -y unzip && docker-php-ext-install pdo pdo_mysql

# Habilita mod_rewrite (Útil para roteamento no React se usar React Router)
RUN a2enmod rewrite

WORKDIR /var/www/html

# 1. Copia o site estático gerado (HTML/JS/CSS)
COPY --from=builder /app/dist /var/www/html

# 2. Copia o Script de E-mail (que estava na raiz do contexto de build)
COPY mail.php /var/www/html/

# 3. Copia a biblioteca PHPMailer
COPY PHPMailer /var/www/html/PHPMailer

# Ajusta permissões para o Apache conseguir ler
RUN chown -R www-data:www-data /var/www/html