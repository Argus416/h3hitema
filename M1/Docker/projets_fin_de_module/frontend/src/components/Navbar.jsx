import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
	return (
		<Layout className="layout">
			<Header>
				<Link to="/">Home</Link>
			</Header>
		</Layout>
	);
};

export default Navbar;
