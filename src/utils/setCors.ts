export type CORSConfig = {
  allowCredentials?: 'true' | 'false'
  allowHeaders?: string
  allowMethods?: string
  allowOrigin?: string
}

export default (response: Response, corsConfig: CORSConfig) => {
  response.headers.set(
    'Access-Control-Allow-Credentials',
    corsConfig.allowCredentials || 'true',
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    corsConfig.allowHeaders || 'application/json, Content-type',
  )
  response.headers.set(
    'Access-Control-Allow-Methods',
    corsConfig.allowMethods || 'GET, POST',
  )
  response.headers.set(
    'Access-Control-Allow-Origin',
    corsConfig.allowOrigin || '*',
  )
  response.headers.set('X-Content-Type-Options', 'nosniff')
}
