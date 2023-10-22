import React, { useEffect, useState, useRef } from 'react';

const TypingEffectComponent = () => {
  const [typingContent, setTypingContent] = useState('');
  const [partIndex, setPartIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const sentences = ["Blockchain DApps", "Smart Contract", "Blockchain Games"];

  const cursorRef = useRef(null);

  // Type or delete characters
  useEffect(() => {
    if (!isDeleting && charIndex === sentences[partIndex].length) {
      // Sentence completion pause and start deleting
      cursorRef.current.style.display = 'none';
      setTimeout(() => {
        setIsDeleting(true);
        cursorRef.current.style.display = 'inline-block';
      }, 1000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Sentence fully deleted
      setIsDeleting(false);
      setPartIndex((partIndex + 1) % sentences.length); // Move to next sentence or loop back to first
      return;
    }

    const interval = setInterval(() => {
      const newCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setTypingContent(sentences[partIndex].substring(0, newCharIndex));
      setCharIndex(newCharIndex);
    }, 100);

    return () => clearInterval(interval); // Clean up the interval on unmount or on dependency change
  }, [charIndex, isDeleting, partIndex, sentences]);

  return (
    <div>
      <h1 id="container-title">
        Learn how to code<br />
        <strong id="title-moving">{typingContent}</strong><div id="cursor" ref={cursorRef}></div><br />
        while having fun
      </h1>
      {/* rest of your component */}
    </div>
  );
}

export default TypingEffectComponent;
