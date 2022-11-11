import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
	const e = useNavigate();

	return (
		<Layout className="layout">
			<Header>
				<Link to="/">Home</Link>
			</Header>
		</Layout>
	);
};

export default Navbar;
