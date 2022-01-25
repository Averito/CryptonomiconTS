import React from 'react';
import { Search } from 'features/search/Search';
import { Button } from 'shared/UIKit/buttons/Button';
import { ErrorText } from 'shared/UIKit/errorText/ErrorText';

export const FormCreate = () => {
	return (
		<section>
			<div className='flex'>
				<div className='max-w-xs'>
					<label
						htmlFor='wallet'
						className='block text-sm font-medium text-blue-700'>
						Тикер
					</label>
					<div className='mt-1 relative rounded-md shadow-md'>
						<input
							type='text'
							name='wallet'
							id='wallet'
							className='block w-full pr-10 border-blue-300 text-blue-900 focus:outline-none focus:ring-blue-500
									focus:border-blue-500 sm:text-sm rounded-md'
							placeholder='Например DOGE'
						/>
						<Search />
					</div>
				</div>
			</div>
			<ErrorText type={''} />
			<Button type='CREATE'>Добавить</Button>
		</section>
	);
};
