import { KVNamespace } from '@cloudflare/workers-types'
export * from '@cloudflare/workers-types'

declare global {
  const WORKERS_GRAPHQL_CACHE: KVNamespace
}
