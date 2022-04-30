import { useEffect } from 'react';

export default function usePageTitle(title = '', isFull = false) {
  useEffect(() => {
    const titleTag = document.querySelector('title');
    if (titleTag) {
      titleTag.textContent = isFull ? title : `${title} | VNVC`;
    }
  }, []);

  return null;
}
