import { Layout } from "antd";
import { PageHeader } from "antd";
import { useCallback, useState, useEffect } from "react";
import { articles } from "../class/Articles";

const { Content } = Layout;

const ItemDetails = () => {
	const [item, setItem] = useState({});

	const getItem = useCallback(async () => {
		const item = await articles.getItem(1);
		const { data } = item;

		return data;
	});

	useEffect(() => {
		getItem().then((data) => setItem(data));
	}, []);

	return (
		<Content style={{ width: "85%", margin: "0 auto" }}>
			{item && (
				<>
					<PageHeader title={item.title} style={{ padding: "15px 0" }} />
					<p>{item.description}</p>
				</>
			)}
		</Content>
	);
};

export default ItemDetails;
