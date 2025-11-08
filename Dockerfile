# Étape 1 : Build l'application
FROM node:22-alpine AS builder

WORKDIR /app

ARG RESEND_API_KEY

ENV RESEND_API_KEY=$RESEND_API_KEY

# Installer deps
COPY package*.json ./
RUN npm install

# Copier le code et générer Prisma + build
COPY . .
# RUN npx prisma generate
RUN npm run build

# Étape 2 : Image de prod
FROM node:22-alpine

WORKDIR /app

# Installer uniquement les deps prod
COPY package*.json ./
RUN npm install --only=production

# Copier le build et Prisma
COPY --from=builder /app ./

EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

CMD ["npm", "start"]
