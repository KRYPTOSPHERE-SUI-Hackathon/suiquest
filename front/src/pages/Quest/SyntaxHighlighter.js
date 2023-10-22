import React from 'react';
import styles from './SyntaxHighlighter.module.css';

const SyntaxHighlighter = ({ code }) => {
    const parseCode = (inputText) => {
        // Escape HTML special characters to prevent XSS
        const escapeHtml = unsafe => unsafe.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        let parsedCode = escapeHtml(inputText);

        // Define the regex rules for keywords, comments, strings, and numbers
        const rules = [
            { regex: /(\/\/.*|\/\*[\s\S]*?\*\/)/g, className: styles.comment }, // comments
            { regex: /\b(fun|public|struct|module|use|let|mut|address|if|else|init)\b/g, className: styles.keyword }, // Move keywords
            { regex: /"[^"]*"/g, className: styles.string }, // strings
            { regex: /\b\d+\b/g, className: styles.number }, // numbers
        ];

        // Replace the matched text with the same text wrapped in a span element with the appropriate class
        rules.forEach(rule => {
            parsedCode = parsedCode.replace(rule.regex, match => `<span class="${rule.className}">${match}</span>`);
        });

        return parsedCode;
    };

    return (
        <pre className={styles.code}>
            {/* Set the HTML content with the parsed and highlighted code */}
            <code dangerouslySetInnerHTML={{ __html: parseCode(code) }} />
        </pre>
    );
};

export default SyntaxHighlighter;
