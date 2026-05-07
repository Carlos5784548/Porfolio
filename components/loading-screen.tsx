import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
    const [text, setText] = useState('');
    const fullText = 'Initializing portfolio... ✓';

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(typingInterval);
            }
        }, 70); // Typing speed
        return () => clearInterval(typingInterval);
    }, []);

    return <div className="loading-screen"><span className="terminal-text">{text}</span></div>;
};

export default LoadingScreen;