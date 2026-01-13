# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY app/package.json .
RUN npm install --production
COPY app .

# ---------- Runtime stage ----------
FROM node:20-alpine
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder /app /app

USER appuser
EXPOSE 3000

HEALTHCHECK CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["node", "server.js"]
