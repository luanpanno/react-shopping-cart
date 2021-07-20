export function urlSearchParams(url: string, query: string) {
  return new URLSearchParams(url).get(query);
}
