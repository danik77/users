import React from "react";

import { Pagination, Container } from "@mui/material";

const UserPagination = ({
	onPageChange,
	usersCount,
	currentPage,
	usersOnPage,
}) => {
	const totalPageCount = Math.ceil(usersCount / usersOnPage);

	if (currentPage === 0) {
		return null;
	}

	const handlePagination = (event, pageNumber) => {
		onPageChange(pageNumber);
	};

	return (
		<Pagination
			count={totalPageCount}
			onChange={(event, pageNumber) => handlePagination(event, pageNumber)}
		/>
	);
};

export default UserPagination;
