import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'processes/store';

export const useTypedSelect: TypedUseSelectorHook<RootState> = useSelector;
