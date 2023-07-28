import React, { useState, useEffect } from 'react';

const MessageComponent = () => {
  const paragraph =
    'This is a sample paragraph for word-by-word rendering in React.';
  const words = paragraph.split(' ');

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(prevText => prevText + words[currentIndex] + ' ');
      currentIndex++;

      if (currentIndex === words.length) {
        clearInterval(interval);
      }
    }, 300); // Adjust the delay between words (in milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, []);

  return <div>{displayedText}</div>;
};

export default MessageComponent;