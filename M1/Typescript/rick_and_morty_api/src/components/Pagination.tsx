import { useEffect, useState } from "react";

const Pagination = (props: any) => {
	const nbPages = props.nbPages as number;
	const setCurrentPageProp = props.setCurrentPage;
	const currentPage = parseInt(props.currentPage)
	const [nbPagesInArray, setNbPagesInArray]: any[] = useState(Array(nbPages).fill(null).map((value ,index) => (index )))

	useEffect(()=>{
		setNbPagesInArray(Array(nbPages).fill(null).map((value ,index) => (index )).slice(currentPage , currentPage + 10))
	},[currentPage])

	const changePage = (newPage: number) => {
		setCurrentPageProp(newPage);
	};

	return (
		<nav className="navigation-pagination" aria-label="navigation">
			<ul className="pagination">
				<li className="page-item">
					<span className="page-link cursor-pointer" aria-label="Next" onClick={() => changePage(parseInt(currentPage) - 1)}>
						<span aria-hidden="true">&laquo;</span>
					</span>
				</li>

				{nbPagesInArray.length > 0 && nbPagesInArray.map((page, index) => (
					<li className={`page-item cursor-pointer ${page === currentPage ? 'active' : ''}`}  key={index}>
						<span className="page-link" onClick={() => changePage(page)}>
							{page}
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
