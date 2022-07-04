import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from '../../app/dataSlice';
import { Button } from '@mui/material';
 
const UserDelete = ({user_id}) => {
   
  const dispatch = useDispatch();
 
  const onDeleteUser = () => {
   if(window.confirm('Are you sure?')){
     dispatch({type: 'USER_DELETE_REQUESTED', payload: user_id})
   }
  }

  return (
    <Button variant="contained" onClick={onDeleteUser} sx={{  mr: 1 }}>Delete</Button>
  );
}

export default UserDelete;

