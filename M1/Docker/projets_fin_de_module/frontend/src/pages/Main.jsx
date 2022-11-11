import React, { useCallback } from "react";
import { PageHeader } from "antd";

import { Layout } from "antd";
import { articles } from "../class/Articles";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Divider, List, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const Main = () => {
	const navigate = useNavigate();

	const [items, setItems] = useState([]);

	const getItems = useCallback(async () => {
		const result = await articles.getItems();
		const { data } = result;
		console.log(data);
		return data;
	});

	useEffect(() => {
		try {
			getItems().then((e) => setItems(e));

			console.log(items);
		} catch (err) {
			console.log(err);
		}
	}, []);

	const clickHandler = (id) => {
		navigate(`/item/${id}`);
	};

	return (
		<Content style={{ width: "85%", margin: "0 auto" }}>
			<Divider orientation="left"> Tous les articles </Divider>{" "}
			<List
				size="small"
				bordered
				dataSource={items}
				renderItem={(item) => (
					<List.Item style={{ display: "flex", justifContent: "space-between", alignItems: "center" }}>
						{item.title} <Button onClick={() => clickHandler(item.id)}> M.Chaise JEDI </Button>
					</List.Item>
				)}
			/>{" "}
		</Content>
	);
};

export default Main;