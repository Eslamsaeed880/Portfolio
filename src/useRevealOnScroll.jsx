import { useRef, useEffect } from 'react';

export default function useRevealOnScroll(animationClass = 'translate-in') {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(animationClass);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}
