import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Div } from "./CompenentObserver";

interface ComponentObserverProps {
  Item: ReactNode;
}

export const ComponentObserver: React.FC<ComponentObserverProps> = ({
  Item,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSrcProp, setIsSrcProp] = useState(false);
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
      const itemProps = Item.props;

      if (Item.props.hasOwnProperty("src")) {
        setIsSrcProp(true);
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
      className={`${isVisible ? "visible" : ""} ${isSrcProp ? "src-prop" : ""}`}
    >
      {Item}
    </Div>
  );
};
