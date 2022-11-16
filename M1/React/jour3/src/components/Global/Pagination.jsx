const Pagination = ({ nbPage, currentIndex, changePaginationIndex }) => {
	nbPage = Array(nbPage)
		.fill(null)
		.map((x, index) => index + 1);

	const isActive = (currentIndex, getIndexToActive) => {
		return currentIndex === getIndexToActive ? "page-link active" : "page-link";
	};

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				{nbPage.map((nb) => (
					<li className="page-item" key={nb}>
						<button className={isActive(currentIndex, nb)} onClick={() => changePaginationIndex(nb)}>
							{nb}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
