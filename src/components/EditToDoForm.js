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


function EditToDoForm (todo, handleEditFormSubmit, prevToDos, todos, isEditing, item, setIsEditing, updatedItem, setTodos, id, updatedTodo) {
    // here we are mapping over the todos array - the idea is check if the todo.id matches the id we pass into the function
    // if the id's match, use the second parameter to pass in the updated todo object
    // otherwise just use old todo
   
    // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
   
    // update the todos state with the updated todo
  

    // console.log(updatedItem)
    


return (

<div>test</div>
                   
                      )



}

export default EditToDoForm;
