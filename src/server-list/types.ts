export type SearchEntry = {
  name: string;
  url: string;
  lastAccess?: number;
  totalHits?: number;
};

export function isSearchEntry(obj: any): obj is SearchEntry {
  return (
    obj &&
    typeof obj === "object" &&
    typeof obj.name === "string" &&
    typeof obj.url === "string" &&
    (typeof obj.lastAccess === "undefined" ||
      typeof obj.lastAccess === "number") &&
    (typeof obj.totalHits === "undefined" || typeof obj.totalHits === "number")
  );
}
