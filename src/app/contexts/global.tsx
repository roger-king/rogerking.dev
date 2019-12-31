import React from 'react';
import { workHistory } from '../app.constants';
import { GlobalContextType } from '../../types';

export const GlobalContext = React.createContext<GlobalContextType>({
    selectedWork: workHistory[0],
    setSelectedWork: () => {},
});
