import {
  type CSSProperties,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface UseTerminalWindowOptions {
  initialClosed?: boolean;
  initialMinimized?: boolean;
  initialMaximized?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: (maximized: boolean) => void;
  onRestore?: () => void;
  onRelaunch?: () => void;
}

export interface UseTerminalWindowReturn {
  isClosed: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  isDragging: boolean;
  isResizing: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number } | null;
  containerRef: RefObject<HTMLDivElement | null>;
  containerClasses: string;
  containerStyle: CSSProperties;
  trafficLightProps: {
    isMaximized: boolean;
    onClose: (e: MouseEvent) => void;
    onMinimize: (e: MouseEvent) => void;
    onMaximize: (e: MouseEvent) => void;
  };
  barProps: {
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerCancel: (e: PointerEvent<HTMLDivElement>) => void;
    onDoubleClick: (e: MouseEvent<HTMLDivElement>) => void;
  };
  gripProps: {
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => void;
    onPointerCancel: (e: PointerEvent<HTMLDivElement>) => void;
  };
  handleReopen: () => void;
  handleRestore: () => void;
}

export function useTerminalWindow(
  options: UseTerminalWindowOptions = {},
): UseTerminalWindowReturn {
  const {
    initialClosed = false,
    initialMinimized = false,
    initialMaximized = false,
    onClose,
    onMinimize,
    onMaximize,
    onRestore,
    onRelaunch,
  } = options;

  const [isClosed, setIsClosed] = useState(initialClosed);
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const [isMaximized, setIsMaximized] = useState(initialMaximized);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null,
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);

  const resizeStartRef = useRef<{
    startX: number;
    startY: number;
    startWidth: number;
    startHeight: number;
  } | null>(null);

  // Escape key handler for un-maximizing or un-minimizing
  useEffect(() => {
    const handleGlobalKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMaximized) {
          setIsMaximized(false);
          onMaximize?.(false);
        } else if (isMinimized) {
          setIsMinimized(false);
          onRestore?.();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isMaximized, isMinimized, onMaximize, onRestore]);

  // Drag interaction handlers
  const handleDragPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (isMaximized || e.button !== 0) return;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
    setIsDragging(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture is not supported
    }
  };

  const handleDragPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    setPosition({
      x: dragStartRef.current.initialX + deltaX,
      y: dragStartRef.current.initialY + deltaY,
    });
  };

  const handleDragPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return;

    dragStartRef.current = null;
    setIsDragging(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore if pointer capture is not supported
    }
  };

  // Resize interaction handlers
  const handleResizePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (isMaximized || e.button !== 0) return;
    e.stopPropagation();

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    resizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startWidth: rect.width,
      startHeight: rect.height,
    };
    setIsResizing(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture is not supported
    }
  };

  const handleResizePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!resizeStartRef.current) return;

    const deltaX = e.clientX - resizeStartRef.current.startX;
    const deltaY = e.clientY - resizeStartRef.current.startY;

    const newWidth = Math.max(300, resizeStartRef.current.startWidth + deltaX);
    const newHeight = Math.max(
      220,
      resizeStartRef.current.startHeight + deltaY,
    );

    setSize({ width: newWidth, height: newHeight });
  };

  const handleResizePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!resizeStartRef.current) return;

    resizeStartRef.current = null;
    setIsResizing(false);

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore if pointer capture is not supported
    }
  };

  const handleBarDoubleClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return;

    setIsMaximized(prev => {
      const next = !prev;
      onMaximize?.(next);
      return next;
    });
  };

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();
    setIsClosed(true);
    setIsMinimized(false);
    onClose?.();
  };

  const handleMinimize = (e: MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
    onMinimize?.();
  };

  const handleMaximize = (e: MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(prev => {
      const next = !prev;
      onMaximize?.(next);
      return next;
    });
  };

  const handleRestore = () => {
    setIsMinimized(false);
    onRestore?.();
  };

  const handleReopen = () => {
    setIsClosed(false);
    setIsMinimized(false);
    setPosition({ x: 0, y: 0 });
    onRelaunch?.();
    onRestore?.();
  };

  const containerClasses = [
    'Terminal',
    isMaximized && 'Terminal--maximized',
    isDragging && 'Terminal--dragging',
    isResizing && 'Terminal--resizing',
  ]
    .filter(Boolean)
    .join(' ');

  const containerStyle: CSSProperties = isMaximized
    ? {}
    : {
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        ...(size
          ? { width: `${size.width}px`, height: `${size.height}px` }
          : {}),
      };

  return {
    isClosed,
    isMinimized,
    isMaximized,
    isDragging,
    isResizing,
    position,
    size,
    containerRef,
    containerClasses,
    containerStyle,
    trafficLightProps: {
      isMaximized,
      onClose: handleClose,
      onMinimize: handleMinimize,
      onMaximize: handleMaximize,
    },
    barProps: {
      onPointerDown: handleDragPointerDown,
      onPointerMove: handleDragPointerMove,
      onPointerUp: handleDragPointerUp,
      onPointerCancel: handleDragPointerUp,
      onDoubleClick: handleBarDoubleClick,
    },
    gripProps: {
      onPointerDown: handleResizePointerDown,
      onPointerMove: handleResizePointerMove,
      onPointerUp: handleResizePointerUp,
      onPointerCancel: handleResizePointerUp,
    },
    handleReopen,
    handleRestore,
  };
}
