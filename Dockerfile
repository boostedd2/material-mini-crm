FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . .

RUN npm run build

RUN npm prune --production

FROM node:lts-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
