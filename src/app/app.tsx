import React, { useState, Suspense } from 'react';
import { Grommet, Main } from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme, workHistory } from './app.constants';
import AppRouter from './app.router';
import { Work } from '../types';
import { GlobalContext } from './contexts/global';
import Loading from './components/loading';
import Footer from './components/footer';

const App: React.FC = () => {
    const [selectedWork, setSelectedWork] = useState<Work>(workHistory[0]);

    return (
        <Grommet theme={theme} full>
            <Router>
                <Main pad={{ left: '150px', right: '150px' }}>
                    <GlobalContext.Provider
                        value={{
                            selectedWork,
                            setSelectedWork,
                        }}
                    >
                        <Suspense fallback={<Loading />}>
                            <AppRouter />
                        </Suspense>
                    </GlobalContext.Provider>
                </Main>
                <Footer />
            </Router>
        </Grommet>
    );
};

export default App;
