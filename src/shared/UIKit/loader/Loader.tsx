import './loader.css';

interface LoaderProp {
	data: boolean;
}

export const Loader = ({ data }: LoaderProp) => {
	if (data) {
		return <div className='lds-dual-ring'></div>;
	}
	return <p className='hidden'></p>;
};
