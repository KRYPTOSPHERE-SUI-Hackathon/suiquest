import React, { useState, useRef, useEffect } from 'react';
import styles from './Quest.module.css'; // Importing styles as a CSS module

const Quest = () => {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);
    const overlayRef = useRef(null);

const handleChange = (event) => {
        const value = event.target.value;
        setText(value);
    };

    const getHighlightedText = (inputText, key) => {
        // Use the actual class name from the CSS module
        const highlightSpan = `<span class="${styles.highlight}">${key}</span>`;
    
        // Replace the keyword with the span element
        let newText = inputText.replaceAll(key, highlightSpan);
        return newText;
    };

    // Synchronize textarea scroll with the highlight overlay
    const handleScroll = () => {
        if (overlayRef.current && textareaRef.current) {
            overlayRef.current.scrollTop = textareaRef.current.scrollTop;
        }
    };

    // Update the overlay content after rendering
    useEffect(() => {
        if (overlayRef.current) {
            let text = textareaRef.current.value;

            for (const keyword of ['key', 'store']) {
                text = getHighlightedText(text, keyword);
            }
            overlayRef.current.innerHTML = text;
        }
    }, [text]);

    return (
        <div className={styles.ideContainer}>
            <div ref={overlayRef} className={styles.highlightsOverlay}></div>
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleChange}
                onScroll={handleScroll}
                className={styles.codeInput}
                spellCheck="false"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
            />
        </div>
    );
};

export default Quest;
