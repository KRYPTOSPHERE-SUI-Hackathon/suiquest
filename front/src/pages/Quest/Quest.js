import React, { useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import styles from './Quest.module.css';

const Quest = ({ title, description, reward }) => {
    const editorRef = useRef(null);

    const editorOptions = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
    };

    return (
        <div className={styles.questContainer}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={styles.reward}>
                <p>Reward: {reward}</p>
            </div>
            <div className={styles.IDE}>
                <MonacoEditor
                    ref={editorRef}
                    height="600"
                    language="javascript"
                    theme="vs-dark"
                    options={editorOptions}
                    onChange={(newValue, e) => {
                        // handle the change of the editor's content
                        console.log('onChange', newValue, e);
                    }}
                    editorDidMount={(editor, monaco) => {
                        // here is the editor's instance, and you get access to the monaco instance as well
                        console.log('editorDidMount', editor);
                        editorRef.current = editor; // Storing editor instance
                    }}
                />
            </div>
        </div>
    );
};

export default Quest;
