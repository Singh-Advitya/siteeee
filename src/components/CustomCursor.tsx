import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoveredState, setHoveredState] = useState<'default' | 'view' | 'explore' | 'action'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest('[data-cursor="view"]');
      const explore = target.closest('[data-cursor="explore"]');
      const button = target.closest('button, a, input, select');

      if (card) {
        setHoveredState('view');
      } else if (explore) {
        setHoveredState('explore');
      } else if (button) {
        setHoveredState('action');
      } else {
        setHoveredState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform hidden lg:block"
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 border ${
          hoveredState === 'view'
            ? 'w-16 h-16 bg-[#161514] text-[#FAF8F5] border-[#161514] text-[9px] font-mono tracking-widest'
            : hoveredState === 'explore'
            ? 'w-16 h-16 bg-[#C2A87E] text-[#141312] border-[#C2A87E] text-[9px] font-mono tracking-widest font-semibold'
            : hoveredState === 'action'
            ? 'w-8 h-8 bg-transparent border-[#161514] scale-125'
            : 'w-3 h-3 bg-[#161514] border-transparent'
        }`}
      >
        {hoveredState === 'view' && <span>VIEW</span>}
        {hoveredState === 'explore' && <span>MAP</span>}
      </div>
    </div>
  );
};
