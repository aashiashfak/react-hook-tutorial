// use state with obj 

import React, { useState } from 'react'

function HooksObj() {
    const [name, setName] = useState({firstName:"",lastName:""})

    console.log(name)

  return (
    <div>
        <form action="">
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} onChange={e => setName({...name,  lastName: e.target.value})} />
            <h2> firstname : {name.firstName}</h2>
            <h2> lasttname : {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
            </form>r
      
    </div>
  )
}

export default HooksObj

