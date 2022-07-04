import { useState } from "react";
import { Link } from "react-router-dom";
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";
import { Container, Typography } from "@mui/material";

const UserItem = ({ user }) => {
	const [editMode, setEditMode] = useState(false);

	return (
		<Container
			maxWidth="sm"
			sx={{ p: 5, mb: 2, border: 1, borderColor: "grey.500", borderRadius: 1 }}
		>
			<Typography variant="h5" component="h5">
				{user.name} {user.surname}
			</Typography>
			<Typography variant="h6" component="h6" mt={2} mb={2}>
				{user.desc}
			</Typography>
			<UserDelete user_id={user.user_id} />
			<UserEdit user={user} />
		</Container>
	);
};

export default UserItem;
