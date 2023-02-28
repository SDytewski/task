import Button from '@mui/material/Button';
import  { useState, useEffect } from 'react';

function Footer() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
      useEffect(()=>{
        document.title = `You clicked ${count} times`;
      })
  
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <Button  variant="contained" onClick={() => setCount(count + 1)}>Click me</Button>
        <Button  variant="contained" onClick={() => setCount(count - 1)}>Click me</Button>
      </div>
    );
  }
  
  export default Footer;