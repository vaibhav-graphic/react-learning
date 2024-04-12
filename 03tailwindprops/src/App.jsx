import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    userName : "luffy",
    age : 22
  }

  let newArr  =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl md-4'> tailwind test</h1>
    {/* <Card channel = "sammi" someObj = "obj" />  obj and arr are not allowed but when obj and arr declare outside it work */}
    <Card userName = "winner" btnText = "click here"/>
    <Card userName = "losser" btnText="learn here"/>
    </>
  )
}

export default App
