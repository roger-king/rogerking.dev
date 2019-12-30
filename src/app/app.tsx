import React from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from './app.constants';

const App: React.FC = () => {
    return (
        <Grommet theme={theme}>
            <Router />
        </Grommet>
    );
};

export default App;
