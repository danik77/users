import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "./UserItem";
import Pagination from "../Pagination";

import { Container, Typography } from "@mui/material";

let usersOnPage = 5;

const UserList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.data.users);
	const loading = useSelector((state) => state.data.loading);

	const [currentPage, setCurrentPage] = useState(1);

	const firstPageIndex = (currentPage - 1) * usersOnPage;
	const lastPageIndex = firstPageIndex + usersOnPage;

	useEffect(() => {
		dispatch({ type: "USERS_FETCH_REQUESTED" });
	}, []);

	return (
		<Container
			maxWidth="sm"
			sx={{ p: 5, mb: 2, border: 1, borderColor: "grey.500", borderRadius: 1 }}
		>
			<Typography variant="h4" component="h4" sx={{ mb: 2 }}>
				User List
			</Typography>

			{loading && <p>Loading...</p>}

			{users &&
				!loading &&
				users
					.slice(firstPageIndex, lastPageIndex)
					.map((user) => <UserItem key={user.user_id} user={user} />)}

			<Pagination
				currentPage={currentPage}
				usersCount={users.length}
				usersOnPage={usersOnPage}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</Container>
	);
};

export default UserList;
