import { FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'processes/store';

export const withRouter = (Component: FC) => {
	return () => {
		return (
			<BrowserRouter>
				<Provider store={store}>
					<Suspense fallback={'Loading...'}>
						<Component />
					</Suspense>
				</Provider>
			</BrowserRouter>
		);
	};
};
