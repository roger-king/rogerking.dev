import React, { Suspense } from 'react';
import { Grommet, Main } from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from './app.constants';
import AppRouter from './app.router';
import Loading from './components/loading';
import Footer from './components/footer';

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full>
            <Router>
                <Main pad={{ left: '150px', right: '150px' }}>
                    <Suspense fallback={<Loading />}>
                        <AppRouter />
                    </Suspense>
                </Main>
                <Footer />
            </Router>
        </Grommet>
    );
};

export default App;
