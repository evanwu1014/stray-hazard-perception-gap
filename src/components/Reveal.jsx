import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, threshold = 0.1, className = "", style = {} }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{ 
        ...style,
        transitionDelay: isVisible ? `${delay}ms` : "0ms" 
      }}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </div>
  );
}
