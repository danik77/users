import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, TextField, Container, Typography } from "@mui/material";

const initialUserData = {
  name: "",
  surname: "",
  desc: "",
};

const UserAdd = (props) => {
  const [userData, setUserData] = useState(initialUserData);

  const dispatch = useDispatch();

  const onChange = (e) => { 
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onCreate = () => {

    if(!userData.name) {
      alert("Type user name")
      return;
    }

    dispatch({ type: "USER_ADD_REQUESTED", payload: userData });
    setUserData(initialUserData)
  };
 
  return (
    <Container
      maxWidth="sm"
      sx={{ p: 5, mb: 2, border: 1, borderColor: "grey.500", borderRadius: 1 }}
    >
      <Typography variant="h4" component="h4">
        Create New User
      </Typography>
      <TextField
        id="standard-basic"
        label="Name"
        name="name"
        variant="standard"
        defaultValue={userData.name}
        onChange={onChange}
        fullWidth
      />
      <TextField
        id="standard-basic"
        label="Surname"
        name="surname"
        variant="standard"
        defaultValue={userData.surname}
        onChange={onChange}
        fullWidth
      />
      <TextField
        id="standard-basic"
        label="Desc"
        name="desc"
        variant="standard"
        defaultValue={userData.desc}
        onChange={onChange}
        fullWidth
        multiline
        rows={4}
      />

      <Button variant="contained" onClick={onCreate} sx={{ mt: 3 }}>
        Create New User
      </Button>
    </Container>
  );
};

export default UserAdd;

/*
    <input type="text" value={userData.name} onChange={onChange}  placeholder="Name" />
      <input type="text" value={userData.surname} onChange={onChange}  placeholder="Surname" />
      <input type="text" value={userData.desc} onChange={onChange}  placeholder="Desc" />

*/

  /*
      const onReset = () => {
        dispatch(resetTasksStatuses());
      }
    */
