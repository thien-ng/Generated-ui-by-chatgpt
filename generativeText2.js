import React, { useState, useEffect } from 'react';

const MessageComponent = () => {
  const messages = [
    'Hello!',
    'How are you?',
    'I hope you are doing well.',
    'Have a great day!',
  ];

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let currentWord = '';

    const interval = setInterval(() => {
      const message = messages[currentIndex];
      const words = message.split(' ');

      if (currentWord.length < words.length) {
        currentWord += words[currentWord.length] + ' ';
        setDisplayedText(prevText => prevText + words[currentWord.length - 1] + ' ');
      } else {
        currentIndex++;
        currentWord = '';
        setDisplayedText(prevText => prevText + '\n');
      }

      if (currentIndex === messages.length) {
        clearInterval(interval);
      }
    }, 1000); // Adjust the delay between words (in milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, [messages]);

  return <div>{displayedText}</div>;
};

export default MessageComponent;