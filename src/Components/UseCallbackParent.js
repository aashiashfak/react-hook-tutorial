import React, { useCallback, useState } from 'react'
import Title from './Title'
import UseCallbackCount from './UseCallbackCount'
import UseCallbackButton from './UseCallbackButton'

function UseCallbackParent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(1110)

    const incrementSalary = useCallback(()=> setSalary(salary +1),[salary])
    const incrementAge = useCallback(() => setAge(age + 1),[age]);

  return (
    <div>
      <Title />
      <UseCallbackCount text="Age" count={age} />
      <UseCallbackButton handleClick={incrementAge}>Increment Age </UseCallbackButton>
      <UseCallbackCount text="Salary" count={salary} />
      <UseCallbackButton handleClick={incrementSalary}>Increment Salary</UseCallbackButton>
    </div>
  );
}

export default UseCallbackParent

