const Pagination = (props: any) => {
	const nbPages = props.nbPages as number;
	const setCurrentPageProp = props.setCurrentPage;
	const nbPagesInArray: null[] = Array(nbPages).fill(null);

	const changePage = (newPage: number) => {
		console.log("clicked");
		setCurrentPageProp(newPage);
	};

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link" href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>

				{nbPagesInArray.map((page, index) => (
					<li className="page-item" key={index}>
						<span className="page-link" onClick={() => changePage(index + 1)}>
							{index + 1}
						</span>
					</li>
				))}

				<li className="page-item">
					<a className="page-link" href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
