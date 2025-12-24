FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN npm i -g pnpm

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm i

FROM base AS builder
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build && pnpm install --production --ignore-scripts --prefer-offline

FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["pnpm", "start"]
