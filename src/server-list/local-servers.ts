import localforage from "localforage";
import {
    isSearchEntry,
    SearchEntry
} from "./types";

const searchStore = localforage.createInstance({
  name: "server-searches",
});

export const addSearch = async ({ name, url }: SearchEntry) => {
  const entry = await localforage.getItem(url);

  if (entry === null || !isSearchEntry(entry)) {
    return await searchStore.setItem(url, {
      name,
      url,
      lastAccess: Date.now(),
      totalHits: 1,
    });
  }

  const newEntry = {
    ...entry,
    totalHits: (entry.totalHits || 0) + 1,
    lastAccess: Date.now(),
    name,
  };
  return await searchStore.setItem(url, newEntry);
};

export const removeSearch = async (url: string) => {
  return await searchStore.removeItem(url);
};

const sortSearches = (searches: SearchEntry[]): SearchEntry[] => {
  return searches
    .sort((a, b) => {
      if (a.totalHits === b.totalHits) {
        return 0;
      }
      return (a.totalHits || 0) < (b.totalHits || 0) ? 1 : -1;
    })
    .slice(0, 4);
};

export const getLocalServers = async (): Promise<SearchEntry[]> => {
  const keys = await searchStore.keys();
  const entries = await Promise.all(
    keys.map(async (key) => {
      const history = await searchStore.getItem(key);
      return history as SearchEntry;
    })
  );
  return sortSearches(entries);
};
