import React, { useContext,} from 'react'
import { MyContext } from './Context'



function Consumer() {
    const [value, setValue] = useContext(MyContext);

    const toggleValue = () => {
      setValue(prev => 
        prev === 'Hello World' ? 'Welcome' : 'Hello World'
      );
    };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={toggleValue}>Click Me</button>
    </div>
  )
}

export default Consumer
