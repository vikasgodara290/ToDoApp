import { useState } from 'react'

function App() {
  return (
    <>
      <InputLineComponent/>
    </>
  )
}

function InputLineComponent(){
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
  }

  function handleOnClick(event){
    console.log(event);
  }

  return (
    <>
      {
        storedLines.map( (lines, index) => 
          <div>
            <textarea 
              className='textArea'
              key={index} 
              type='text'
              onKeyDown={handleKeyDown} 
              onClick={handleOnClick}
              defaultValue={lines.line} 
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
            />
          </div>
        )
      }
    </>
  )
}

export default App
