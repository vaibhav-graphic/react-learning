import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1>we will win the war</h1>    
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp/>
  </React.StrictMode>,
)
