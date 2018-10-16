//@ flow
export type Config = {
  target: string,
  endpoint: string,
  tick: number,
  onDocumentReceived: string => void
}
