import type {
  KeyValueCache,
  KeyValueCacheSetOptions,
} from 'apollo-server-caching'

export default class KVCache implements KeyValueCache<string> {
  get(key: string) {
    return WORKERS_GRAPHQL_CACHE.get(key)
  }

  set(key: string, value: string, options: KeyValueCacheSetOptions) {
    const opts: any = {}
    const ttl = options && options.ttl
    if (ttl) {
      opts.expirationTtl = ttl
    }
    return WORKERS_GRAPHQL_CACHE.put(key, value, opts)
  }

  delete(key: string) {
    return WORKERS_GRAPHQL_CACHE.delete(key)
  }
}
