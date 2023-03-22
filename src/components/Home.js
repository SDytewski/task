import Button from '@mui/material/Button';
import  { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SendIcon from '@mui/icons-material/Send';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F7F8F8',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

function Footer() {
    // Declare a new state variable, which we'll call "todo"
    // Also create a copy of the todo as an array
    const [todos, setTodos] = useState([]);
    //setTodos is the rerendered value
    const [todo, setTodo] = useState("");
  

    //Onclick function to add Todo
     const addTodo = (event) => {
      if (todo !== " ") {
      
      setTodos([...todos, todo]);
      }

      
    };

    function handleReset(e) {
      e.preventDefault();
      
      // clearing the values
      setTodo("");
      
    }

    //Grabs the input field that is "text" and filters out the the input
    // and re-renders the page

    const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => {
        return todo !== text;
      });
      setTodos(newTodos);
    };


    const editTodo = (text) => {
      const newTodos = todos.filter((todo) => {
        return todo == text;
      });
      alert("Edit!")
    };

      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You will add task ${todo}`;
     
      
  });

   
    return (
            
       <Box sx={{ flexGrow: 1 }} padding={6}>
        
       <Grid container spacing={2}>
     
       
         <Grid item xs={12}>
           <Item>
            
            <div>
            <Typography variant="h3" color='primary.light' padding={3}>TO DO TASKMAKER</Typography>
             <h4>YOU WILL ADD TASK:</h4>
               <h3>{todo}</h3>
       
               <TextField id="outlined-basic" type="text" name="todo" value={todo} placeholder="Type a todo task" onChange={(e) => {
               setTodo(e.target.value);}} />
        
        
              <Button className="add-button" variant="contained" type="submit" endIcon={<SendIcon />}  sx={{ ml: 2, p: 2}  }onClick={(e) => { addTodo(); handleReset(e);}}>
                 Send
                </Button>      
            </div>
      
        

      </Item>

      <Grid item xs={12}>
           <Item>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                <div className="todo">
                    <li key={index}> {todo} 
                    </li>

                  <Button className="delete-button" variant="outlined" startIcon={<DeleteIcon /> }  onClick={() => {
                  deleteTodo(todo);
                }}>
                  Delete</Button>   

                  <Button className="edit-button" variant="outlined" startIcon={<EditOutlinedIcon/>}  onClick={() => {
                  editTodo(todo);
                }}>
                  Edit</Button>   

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