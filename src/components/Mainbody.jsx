import React from 'react'



import Leftright from './Leftright'
import Minds from './Minds'
import Outlets from './Outlets'
import Populars from './Populars'




function Mainbody() {
  return (
    <div>
 
    <Leftright title = "What's on your mind"/>
    <Minds/>
    <Leftright title = "Top restaurant chains in Delhi"/>
    <Outlets/>
    <Populars/>
   

</div>    


  )
}

export default Mainbody