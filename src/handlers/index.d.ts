import { CORSConfig } from '../utils/setCors'

export interface GqlHandlerOptions {
  baseEndpoint: string
  playgroundEndpoint: string
  forwardUnmatchedRequestsToOrigin: boolean
  debug: boolean
  cors: CORSConfig
  kvCache: boolean
}
