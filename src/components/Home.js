import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SendIcon from '@mui/icons-material/Send';
import { createTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Container from "@mui/material/Container";



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




function Home() {
  // Declare a new state variable, which we'll call "todo"
  // Also create a copy of the todo as an array
  const [todos, setTodos] = useState([]);
  //setTodos is the rerendered value
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  // These states hide and show buttons
 

  // const [currentTodo, setCurrentTodo] = useState(
  //   {
  //   id: 0, editTodo: ''
  // }


  // );

  // console.log(todos)
 
  const { 
    register, 
    handleSubmit, 
    formState:{ errors },
    reset
  } = useForm();
  const onSubmit = (event) => addTodo(todos); 


  
  //  handleReset(e) setEditShow(true);

  //Onclick function to add Todo
  const addTodo = () => {
    // reset();
    setTodo("");
     
     setTodos((prevToDos) => {
      const task = {
        id: prevToDos.length === 0 ? 1 : prevToDos[prevToDos.length - 1].id + 1,
        taskName: todo.trim(),
        
      }
      return [...prevToDos, task]
    });
    // }

  };
  

  function handleReset(e) {
    e.preventDefault();
    
    // clearing the values
    setTodo("");

  }

  //Grabs the input field that is a string "text" and filters out the the input
  // and re-renders the page

  const deleteTodo = (id, todos) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;


    });
    setTodos(newTodos);
    // console.log(newTodos + "HELLO")
    // console.log(newTodos)
  };


  function handleUpdateTodo(id, updatedTodo) {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
      // if else state state that takes todo.id and matches the updated todo, else keep old todo 
    });
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
    setIsEditing(false);
    // update the todos state with the updated todo
    setTodos(updatedItem);

    // console.log(updatedItem)
  }


  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.taskName = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setIsEditing(null);
  }


  function handleEditFormSubmit(id, updatedTodo) {
    //  console.log(id);
    //  console.log(updatedTodo);

    // call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
    handleUpdateTodo(id, updatedTodo);
  }

  return (
    <Container maxWidth="lg">
    <Box sx={{ flexGrow: 1 }} padding={6}>

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Item>

            <div>
              <Typography variant="h3" color='primary.light' padding={3}>TO DO TASKMAKER</Typography>
              <h4>YOU WILL ADD TASK:</h4>
              {/* <h3>{todo}</h3> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField id="outlined-basic"
                  type="text"
                  name="todo"
                  value={todo}
                
                  placeholder="Type a todo task"
                  {...register ("email", {
                    required: "Please enter at least one character",
                    minLength: 1
                  
                  })}
                  error={!!errors?.email}
                  
                  helperText={errors?.email ? errors.email.message : null}
                  sx={{ ml: 1, mt: 1, p: 2, }}
                  onChange={(e) => {
                    setTodo(e.target.value);
                  }} />
                {/* <Box>
                  {errors.email && errors.email.type === "required" && (
                    <span className="error-message">Please enter a task</span>
                  )}
                </Box> */}

                <Button className="add-button" variant="contained" type="submit" endIcon={<SendIcon />} sx={{ ml: 2, mt: 3, p: 2, }} onSubmit={(e) => { addTodo(todos); handleReset(e) }}>
                  Send
                </Button>
              </form>
              
            </div>

          </Item>


          <Grid item xs={12}>
            <Item>

              <ul className="todo-list" style={{
                padding: "0 0",
                listStyle: "none",

              }}
              >


                
                {/* </div> */}
                

                {todos.map((item, index) => (
                  // <div className="todo" style={{ border: 1 }} >
                  <Card variant="outlined" sx={{ minWidth: 275, margin: 2 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">

                        <li>
                          <div key={item.id} ></div>
                         

                            {/* // if we are editing - display the edit todo input
                            // make sure to add the handleEditFormSubmit function in the "onSubmit" prop */}
                            <>
                              {/* we've added an h2 element */}
                              {/* <h2>Edit Todo</h2> */}
                              {/* also added a label for the input */}
                              {/* <label htmlFor="editTodo">Edit todo: </label> */}
                              {/* notice that the value for the update input is set to the currentTodo state */}
                              {/* also notice the handleEditInputChange is being used */}
                              {item.id === isEditing ? (
                                
                              <TextField
                                name={`editTodo${item.id}`}
                                type="text"
                                placeholder="Edit todo"
                                value={item.taskName}
                                onChange={(e) => {
                                  setTodos((prevToDos) => {
                                    return prevToDos.map((todo) => {
                                      return {
                                        ...todo,
                                        taskName:
                                          (todo.id === item.id ?
                                            e.target.value : todo.taskName
                                          )

                                      }
                                    })
                                  })
                                }}
                              />)
                               :(<div>{item.taskName}</div>)


                              }
 

                              {/* here we added an "update" button element - use the type="submit" on the button which will still submit the form when clicked using the handleEditFormSubmit function */}
                             
                              {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
                              {/* <Button variant="outlined" sx={{ ml: 2, mt: 2, mb: 1, p: 1 }} onClick={() => { setIsEditing(false); setShow(true); setEditShow(true); setHeaderShow(true) }}>Clear Text</Button> */}

                            </>
                          
                          </li>
                        <div>
                        {item.id === isEditing ? (
                          <Button variant="outlined" sx={{ ml: 2, mr: 3, mt: 2, p: 1 }} onClick={() => { editTodo(todo.id)}}>Submit Edit</Button>
                        ) : (
                          <Button className="edit-button" variant="outlined" startIcon={<EditOutlinedIcon />} sx={{ mr: 2, mt: 2, p: 1 }} onClick={() => {
                            setIsEditing(item.id);}}> Edit</Button>
                         
                        )}
                           <Button className="delete-button" variant="outlined" startIcon={<DeleteIcon />} sx={{ mr: 2, mt: 2, p: 1 }} onClick={() => {
                            deleteTodo(item.id, todos)}}> Delete</Button>
                        </div>
                        
                      </Typography>
                    </CardContent>
                  </Card>
                  // </div>


                ))}

              </ul>


            </Item>
          </Grid>

        </Grid>

      </Grid>
    </Box>
    </Container>
  );
}

export default Home;
