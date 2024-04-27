# Usar una imagen base de Node más reciente
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package.json yarn.lock ./

# Instalar las dependencias
RUN yarn install

# Instalar Husky
RUN yarn husky install

# Instalar Git
RUN apt-get update && apt-get install -y git

# Copiar el resto de los archivos del proyecto
COPY . .

# Indicar el puerto que va a usar la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación en modo de desarrollo
CMD ["yarn", "dev"]

git config --global user.name "carlosahued"
git config --global user.email "carlosahued@outlook.com"