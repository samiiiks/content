import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Accessing the DOM element using useRef
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Log Input Value</button>
    </div>
  );
}
