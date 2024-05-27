FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala o Vue CLI globalmente
RUN npm install -g @vue/cli@5.0.8

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que o Vue CLI usa
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
