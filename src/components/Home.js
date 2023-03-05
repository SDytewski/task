import Button from '@mui/material/Button';
import  { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

function Footer() {
    // Declare a new state variable, which we'll call "todo"
    // Also create a copy of the todo as an array
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");const [task, setTask] = useState("");
  

    const addTodo = () => {
      if (todo !== " ") {
      
      setTodos([...todos, todo]);
      }
    };

      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${task} times`;
    
    
  });
  
  
    return (
      
       <Box sx={{ flexGrow: 1 }}>
        
       <Grid container spacing={2}>
     
         <Grid item xs={8}>
           <Item> <Button  variant="contained" onClick={() => setTask(task + 1)}>Click me</Button></Item>
         </Grid>
         <Grid item xs={4}>
           <Item>
            
            <div>
        <p>Add a new {task} times</p>
       
        <input id="outlined-basic" type="text" name="todo" value={todo} placeholder="test"  onChange={(e) => {
            setTodo(e.target.value);
          }} />
        <Button variant="outlined" startIcon={<DeleteIcon />}>
         Delete
            </Button>   
        <Button className="add-button" variant="contained" endIcon={<SendIcon />} onClick={addTodo}>
             Send
            </Button>
      </div>
      
      </Item>

      <Grid item xs={12}>
           <Item>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                <div className="todo">
                    <li key={todo}> {todo} 
                    </li>


                </div>
                
                ))}

            </ul>


           </Item>
         </Grid>
         </Grid>
         
       </Grid>
     </Box>




    );
  }
  
  export default Footer;