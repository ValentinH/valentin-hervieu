import { clsx, type ClassValue } from 'clsx';
import { useSyncExternalStore } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', onStoreChange);

      return () => mediaQueryList.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => null,
  );
}

export function arrayMove<T>(items: readonly T[], oldIndex: number, newIndex: number) {
  const nextItems = [...items];
  const [item] = nextItems.splice(oldIndex, 1);
  nextItems.splice(newIndex, 0, item);
  return nextItems;
}
