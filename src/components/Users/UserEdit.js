import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { Button, TextField, Container, Typography } from "@mui/material";

const UserEdit = ({ user }) => {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const initalUserData = {
    name: user.name,
    surname: user.surname,
    desc: user.desc,
    user_id: user.user_id
  };

  const [userNewData, setUserNewData] = useState(initalUserData);

  const onEdit = () => {
    setEdit(!edit);
  };

  const onChange = (e) => {
    setUserNewData({ ...userNewData, [e.target.name]: e.target.value });
  };

  const onSaveUser = () => {

    if(!userNewData.name) {
      alert("Type user name")
      return;
    }

    dispatch({
      type: "USER_EDIT_REQUESTED",
      payload: { user_id: user.user_id, userNewData: userNewData },
    });
    setEdit(false);
  };

  const onCancel = () => {
    setEdit(false);
    setUserNewData(initalUserData);
  };

  return (
    <>
      {!edit && (
        <Button variant="contained" onClick={onEdit}>
          Edit
        </Button>
      )}

      {edit && (
        <Container>
          <Typography variant="h5" component="h5" mt={2}>
            Edit User:
          </Typography>
          <TextField
            id="standard-basic"
            label="Name"
            name="name"
            variant="standard"
            defaultValue={userNewData.name}
            onChange={onChange}
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Surname"
            name="surname"
            variant="standard"
            defaultValue={userNewData.surname}
            onChange={onChange}
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Desc"
            name="desc"
            variant="standard"
            defaultValue={userNewData.desc}
            onChange={onChange}
            fullWidth
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            onClick={onSaveUser}
            sx={{ mt: 3, mr: 1 }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={onCancel} sx={{ mt: 3 }}>
            Cancel
          </Button>
        </Container>
      )}
    </>
  );
};

export default UserEdit;
