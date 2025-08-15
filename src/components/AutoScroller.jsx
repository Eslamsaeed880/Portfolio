import React, { useRef, useEffect } from 'react';

export default function AutoScroller({ children, speed = 1, interval = 20 }) {
  const scrollerRef = useRef(null);
  const items = React.Children.toArray(children);
  const doubledItems = [...items, ...items];

  useEffect(() => {
    const scroller = scrollerRef.current;
    let scrollAmount = speed;
    let autoScroll;
    let isHovered = false;

    function startScroll() {
      autoScroll = setInterval(() => {
        if (!isHovered && scroller) {
          if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
            scroller.scrollLeft = 0;
          } else {
            scroller.scrollBy({ left: scrollAmount, behavior: 'auto' });
          }
        }
      }, interval);
    }

    function stopScroll() {
      clearInterval(autoScroll);
    }

    scroller.addEventListener('mouseenter', () => { isHovered = true; });
    scroller.addEventListener('mouseleave', () => { isHovered = false; });

    startScroll();
    return () => {
      stopScroll();
      scroller.removeEventListener('mouseenter', () => { isHovered = true; });
      scroller.removeEventListener('mouseleave', () => { isHovered = false; });
    };
  }, [speed, interval]);

  return (
    <div
      ref={scrollerRef}
      className="media-scroller"
    >
      {doubledItems}
    </div>
  );
}
