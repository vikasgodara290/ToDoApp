import { useEffect, useRef, useState } from 'react'

function App() {
  return (
    <>
      <InputLineComponent/>
    </>
  )
}

function InputLineComponent(){
  const inputRef = useRef();
  const [storedLines, setStoredLines] = useState(
    [
      {
        line : "this is my first todo"
      }
    ]
  )

  const fontSize = "12px"

  function handleKeyDown(event){
    if(event.key === 'Enter'){
      event.preventDefault()
      setStoredLines([...storedLines, {
        line : ""
      }])    
    }
    inputRef.current.placeholder = ''
  }

  useEffect(()=>{
    inputRef.current.focus();
  }, [storedLines])

  function handleOnClick(event){
    console.log(event);
  }

  return (
    <>
      {
        storedLines.map( (lines, index) => 
          <div>
            <div
              contentEditable='true'
              ref={inputRef}
              className='textArea'
              key={index} 
              type='text'
              onKeyDown={handleKeyDown} 
              onClick={handleOnClick}
              placeholder='write something...' 
              style={{
                backgroundColor : "#111111", 
                color:"white", 
                border:"none",
                outline: "none",
                resize :"none",
                height: "17px",
                fontSize : "14px",
                width : "700px"
              }}
            >{lines.line}</div>
          </div>
        )
      }
    </>
  )
}

export default App
