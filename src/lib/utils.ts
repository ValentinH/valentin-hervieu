import { clsx, type ClassValue } from 'clsx';
import { useEffect, useRef, useSyncExternalStore } from 'react';
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

export function useScrollIntoViewWhenNeeded<T extends HTMLElement>({
  delayMs,
  shouldScroll,
}: {
  delayMs: number;
  shouldScroll: boolean;
}) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!shouldScroll) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const element = elementRef.current;

      if (element && !isElementInViewport(element)) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs, shouldScroll]);

  return elementRef;
}

function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
