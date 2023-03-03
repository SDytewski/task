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
    // Declare a new state variable, which we'll call "count"
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [completedTaskCount, setCompletedTaskCount] = useState(0);


  
    
      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${completedTaskCount} times`;


  
  })
  
  
  const handleClick = () => {
    const id = taskList.length + 1;
    setTaskList((prev) => [
      ...prev,
      {
        id: id,
        task: task,
        complete: false,
      },
    ]);
    setTask("");
  };         
  
  const handleComplete = (id) => {
    let list = setTaskList.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
    item = { ...task, complete: !task.complete };
      } else item = { ...task };
  
      return item;
    });
    setTaskList(list);
  };
  
    return (
      
       <Box sx={{ flexGrow: 1 }}>
        
       <Grid container spacing={2}>
     
         <Grid item xs={8}>
           <Item> <Button  variant="contained" onClick={() => setCompletedTaskCount(completedTaskCount + 1)}>Click me</Button></Item>
         </Grid>
         <Grid item xs={4}>
           <Item>
            
            <div>
        <p>Add a new {completedTaskCount} times</p>
       
        <TextField  onInput={(e) =>setTask(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" type="text" value="task" />
        <Button variant="outlined" startIcon={<DeleteIcon />}>
         Delete
            </Button>   
        <Button onClick={() => handleClick()} variant="contained" endIcon={<SendIcon />}>
             Send
            </Button>
      </div>
      <Grid item xs={6}>
          <h2>Completed tasks</h2>
         </Grid>
         <Grid item xs={6}>
         <h2>Pending tasks</h2>
            </Grid>
      </Item>
      <Grid item xs={12}>

        <ul>
        {taskList.map((todo) => {
    return (
      <p
        complete={task.complete}
        id={task.id}
        onClick={() => handleComplete(task.id)}
        style={{
          listStyle: "none",
          textDecoration: todo.complete && "line-through",
        }}
      >
        {task.task}
      </p>
    );
  })}

        </ul>
      </Grid>
      
         </Grid>

         
       </Grid>
     </Box>




    );
  }
  
  export default Footer;