import { useState } from 'react'

function App() {
  const [storedLines, setStoredLines] = useState(
    [
      {
        line : "go to gym"
      },
      {
        line : "Study for 4 hours."
      },
      {
        line : "write something..."
      }
    ]
  )

  function handleKeyDown(event){
    if(event.key === 'Enter'){
      //Want to creat a new input field same as current

      setStoredLines([...storedLines, {
        line : "write something..."
      }])

      console.log(storedLines);

    }
  }
  
  return (
    <>
      {
        storedLines.map(lines => 
          <div>
            <input onKeyDown={handleKeyDown} defaultValue={lines.line} style={{backgroundColor : "#111111", color:"white", border:"none"}}/>
          </div>
        )
      }
    </>
  )
}

export default App
