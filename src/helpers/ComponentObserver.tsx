import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Div } from "./CompenentObserver";

interface ComponentObserverProps {
  position?: string;
  Item: ReactNode;
}

export const ComponentObserver: React.FC<ComponentObserverProps> = ({
  Item,
  position,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (React.isValidElement(Item)) {
      if (position) {
        setIsRight(true);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Div
      ref={ref}
      className={`${isVisible ? "visible" : ""} ${isRight ? "right" : ""}`}
    >
      {Item}
    </Div>
  );
};
