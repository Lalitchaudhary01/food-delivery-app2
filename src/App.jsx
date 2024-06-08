import React from "react"
import Navbar from "./components/Navbar"
import Footers from "./components/Footers"
import { Outlet } from "react-router-dom"
import appStore from "./utlis/appStore"
import { Provider } from "react-redux"







function App() {
  return (
    <>
  
  <Provider store = {appStore}> 
    <Navbar/> 
    <Outlet/>
    <Footers/>
    </Provider>
    
    </>
  )
}

export default App
