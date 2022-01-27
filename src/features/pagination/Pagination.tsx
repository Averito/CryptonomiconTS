interface PaginationProp {
	nextPage: () => unknown;
	previousPage: () => unknown;
}

export const Pagination = ({ nextPage, previousPage }: PaginationProp) => {
	return (
		<div className='flex'>
			<button
				onClick={previousPage}
				type='button'
				style={{ marginLeft: 0 }}
				className='m-2 inline-flex items-center py-2 px-4
					border border-transparent shadow-sm text-sm leading-4
					font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700
					transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
				Назад
			</button>
			<button
				onClick={nextPage}
				type='button'
				className='m-2 inline-flex items-center py-2 px-4
					border border-transparent shadow-sm text-sm leading-4
					font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700
					transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
				Вперёд
			</button>
		</div>
	);
};
