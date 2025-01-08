import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowd] = useState(false)//this for checkbox, number allowed or not
  const [characterAllowed, setCharacterAllowed] = useState(false)//this for checkbox, character allowed or not

  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback
  ( () => 
    {
      let pass = ""
      let str = 
        "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed)
        str += "0123456789"
      if(characterAllowed)
        str += "!@#$%^&*()"
      //random value picker
      
      for( let i=1;i<=length;i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }

      setPassword(pass)

    }, [length, numberAllowed, characterAllowed, setPassword]
  )

  useEffect(() => {passwordGenerator()},[length,numberAllowed,characterAllowed,setPassword])  

  //copy to clipboard
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback
  (() => 
    {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,3)
      window,navigator.clipboard.writeText(password)

    }, [password])
  

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800' >
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="Password"
          readOnly
          ref={passwordRef}
           />
           <button className='ouline-none bg-blue-500 text-white px-2  hover:bg-sky-700 active:bg-blue-900' 
           onClick={copyPasswordToClipboard}> Copy</button>

        </div>
        
        <div>
          <div className='flex items-center gap-x-1'>
            <input 
            id='input-field'
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="input-field">Number : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>setNumberAllowd((prev) => !prev)}//if previously allowed-> change to not allowed and vie versa
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={()=>setCharacterAllowed((prev) =>!prev)} />
            <label htmlFor="characterInput">Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
