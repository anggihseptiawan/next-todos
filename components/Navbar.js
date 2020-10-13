import React from "react";

const Header = () => {
	return (
		<nav className="flex justify-between items-center">
			<p className="text-2xl font-bold text-grey-800">NEXT TODOS</p>
			<div className="flex">
				<a
					href="/api/login"
					className="rounded bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2"
				>
					Login
				</a>
				<a
					href="/api/logout"
					className="rounded bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
				>
					Logout
				</a>
			</div>
		</nav>
	);
};

export default Header;
