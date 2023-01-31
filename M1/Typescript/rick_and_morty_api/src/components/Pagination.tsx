const Pagination = (props: any) => {
	const nbPages = props.nbPages as number;
	const setCurrentPageProp = props.setCurrentPage;
	const currentPage = parseInt(props.currentPage)
	let nbPagesInArray: null[] = Array(nbPages).fill(null);
	nbPagesInArray = nbPagesInArray.slice(nbPagesInArray.length -10 , nbPagesInArray.length +10)


	const changePage = (newPage: number) => {
		setCurrentPageProp(newPage);
		console.log({currentPage})
	};

	return (
		<nav className="navigation-pagination" aria-label="navigation">
			<ul className="pagination">
				<li className="page-item">
					<span className="page-link cursor-pointer" aria-label="Next" onClick={() => changePage(parseInt(currentPage) - 1)}>
						<span aria-hidden="true">&laquo;</span>
					</span>
				</li>

				{nbPagesInArray.map((page, index) => (
					<li className={`page-item cursor-pointer ${index +1 === currentPage ? 'active' : ''}`}  key={index}>
						<span className="page-link" onClick={() => changePage(index + 1)}>
							{index + 1}
						</span>
					</li>
				))}

				<li className="page-item">
					<span className="page-link cursor-pointer" aria-label="Next" onClick={() => changePage(currentPage + 1)}>
						<span aria-hidden="true">&raquo;</span>
					</span>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
