import React from 'react';

import { Button } from 'shared/UIKit/buttons/Button';

export const Ticker = () => {
	return (
		<dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
			<div className='bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer'>
				<div className='px-4 py-5 sm:p-6 text-center'>
					<dt className='text-sm font-medium text-blue-500 truncate'>
						5555 - USD
					</dt>
					<dd className='mt-1 text-3xl font-semibold text-blue-900'>5555</dd>
				</div>
				<div className='w-full border-t border-blue-200'></div>
				<Button type='DELETE'>Удалить</Button>
			</div>
		</dl>
	);
};
