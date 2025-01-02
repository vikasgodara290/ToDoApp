import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <InputLineComponent />
    </>
  );
}

function InputLineComponent() {
  const inputRefs = useRef([]); 
  const [storedLines, setStoredLines] = useState([
    {
      blockId: 1,
      line: 'this is my first todo',
    },
  ]);

  function handleKeyDown(event, index) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newStoredLines = [...storedLines];
      newStoredLines.splice(index + 1, 0, {
        blockId: storedLines.length + 1,
        line: '',
      });

      setStoredLines(newStoredLines);

      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    }
  }

  useEffect(() => {
    if (inputRefs.current.length === storedLines.length) {
      inputRefs.current[storedLines.length - 1]?.focus();
    }
  }, [storedLines]);

  return (
    <>
      {storedLines.map((line, index) => (
        <div
          contentEditable="true"
          suppressContentEditableWarning="true"
          ref={(el) => (inputRefs.current[index] = el)} // Assign ref
          key={line.blockId}
          id={line.blockId}
          onKeyDown={(event) => handleKeyDown(event, index)}
          placeholder="write something..."
          style={{
            backgroundColor: '#111111',
            color: 'white',
            height: '17px',
            fontSize: '14px',
            width: '700px',
            border: 'none',
            outline: 'none',
          }}
        >
          {line.line}
        </div>
      ))}
    </>
  );
}

export default App;
