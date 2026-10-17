# syntax=docker/dockerfile:1

# ---- Build the React + Vite client ----
FROM node:22-alpine AS build
WORKDIR /app

COPY client/package.json client/package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY client/ ./
RUN npm run build

# ---- Serve the static build ----
# Temporary: replace this stage with the Express app once server/ exists.
FROM node:22-alpine
WORKDIR /app

RUN npm install -g serve@14 --no-audit --no-fund
COPY --from=build /app/dist ./dist

# Railway injects PORT at runtime; 8080 is the local default.
ENV PORT=8080
EXPOSE 8080

# -s = single-page app mode, so React Router paths (e.g. /about) resolve on refresh
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT}"]
