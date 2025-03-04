import { useState, useEffect } from "react";

const AnimatedHeading = ({texts}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const delayBetweenTexts = 2000; // Delay before deleting

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentText) {
      setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <div className="flex items-center justify-center h-fit text-[#28a745]">
      <h1 className="text-3xl md:text-5xl font-bold">
        {displayedText}
        <span className="animate-bounce text-black">|</span>
      </h1>
    </div>
  );
};

export default AnimatedHeading;
