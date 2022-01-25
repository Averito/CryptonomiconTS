import React from 'react';

import './index.css';
import { withRouter } from 'app/providers/withRouter';
import { FormCreate } from 'entities/formCreate/FormCreate';
import { Ticker } from 'entities/ticker/Ticker';
import { useTypedSelect } from 'shared/providers/useTypedSelect';

function App() {
	const store = useTypedSelect(store => store);
	console.log(store);
	return (
		<React.Fragment>
			<div className='container mx-auto flex flex-col items-center bg-blue-100 p-4'>
				<div className='container'>
					<div className='w-full my-4'></div>
					<FormCreate />
					<hr className='w-full border-t border-blue-600 my-4' />
					<Ticker />
				</div>
			</div>
		</React.Fragment>
	);
}

export default withRouter(App);
