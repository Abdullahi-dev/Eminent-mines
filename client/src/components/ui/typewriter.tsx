import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
}

export const Typewriter = ({ words, className, cursorClassName }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={cn("inline-flex", className)}>
      {currentText}
      <span className={cn("ml-1 animate-pulse", cursorClassName)}>|</span>
    </span>
  );
};
