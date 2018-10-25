//@ flow
export type Config = {
  target: string,
  endpoint: string,
  tick: number,
  verbose: Boolean,
  once: Boolean,
  onDocumentReceived: string => void,
  post: any => void
}
