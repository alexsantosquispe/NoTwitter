export const parse = (uri) => {
  if (!uri) return
  return encodeURI(uri)
}
