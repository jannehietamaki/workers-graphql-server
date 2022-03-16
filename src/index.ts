import { handleRequest } from './handler'

const worker: ExportedHandler<Bindings> = { fetch: handleRequest }
export default worker
