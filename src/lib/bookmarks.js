"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "crazymanhua-bookmarks";
const CHANGE_EVENT = "crazymanhua-bookmarks-changed";
const EMPTY_BOOKMARKS = [];

let cachedRaw = null;
let cachedBookmarks = EMPTY_BOOKMARKS;

function getBookmarks() {
  if (typeof window === "undefined") {
    return EMPTY_BOOKMARKS;
  }

  const raw = localStorage.getItem(STORAGE_KEY);

  if (raw === cachedRaw) {
    return cachedBookmarks;
  }

  cachedRaw = raw;

  try {
    const parsed = JSON.parse(raw || "[]");
    cachedBookmarks = Array.isArray(parsed)
      ? parsed.filter((id) => Number.isInteger(id))
      : EMPTY_BOOKMARKS;
  } catch {
    cachedBookmarks = EMPTY_BOOKMARKS;
  }

  return cachedBookmarks;
}

function subscribe(callback) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useBookmarks() {
  return useSyncExternalStore(subscribe, getBookmarks, () => EMPTY_BOOKMARKS);
}

export function toggleBookmark(id) {
  const bookmarks = getBookmarks();

  const updated = bookmarks.includes(id)
    ? bookmarks.filter((comicId) => comicId !== id)
    : [...bookmarks, id];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  window.dispatchEvent(new Event(CHANGE_EVENT));
}
