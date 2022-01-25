import React, { ReactNode } from 'react';

interface ButtonProp {
	children: ReactNode;
	type: string;
}

export const Button = ({ children, type }: ButtonProp) => {
	if (type === 'DELETE') {
		return (
			<button
				className='flex items-center justify-center font-medium w-full bg-blue-100 px-4 py-4 sm:px-6 text-md text-blue-500
									hover:text-blue-600 hover:bg-blue-200 hover:opacity-20 transition-all focus:outline-none'>
				<svg
					className='h-5 w-5'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='#718096'
					aria-hidden='true'>
					<path
						fillRule='evenodd'
						d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1
										1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1
										1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
						clipRule='evenodd'
					/>
				</svg>
				{children}
			</button>
		);
	}
	return (
		<button
			type='button'
			className='my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium
				rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 focus:outline-none
				focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
			<svg
				className='-ml-0.5 mr-2 h-6 w-6'
				xmlns='http://www.w3.org/2000/svg'
				width='30'
				height='30'
				viewBox='0 0 24 24'
				fill='#ffffff'>
				<path
					d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10
									10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
				/>
			</svg>
			{children}
		</button>
	);
};
