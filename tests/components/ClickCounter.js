import { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => setCount(count + 1);

  return (
    <>
      <button onClick={onClick}>Click me</button>

      <span>You clicked {count} times</span>
    </>
  );
};

export default ClickCounter;
