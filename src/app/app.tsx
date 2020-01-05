import React, { useState, Suspense } from 'react';
import { Grommet, Main, ResponsiveContext } from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme, workHistory } from './app.constants';
import { Work } from '../types';
import { GlobalContext } from './contexts/global';
import AppRouter from './app.router';
import Banner from './components/banner';
import Loading from './components/loading';
import Header from './components/header';
import Footer from './components/footer';

const App: React.FC = (): JSX.Element => {
    const size = React.useContext(ResponsiveContext);
    const isMobile = size === 'small';
    const padding = isMobile ? { left: '15px', right: '15px' } : { left: '150px', right: '150px' };
    const [selectedWork, setSelectedWork] = useState<Work>(workHistory[0]);

    return (
        <Grommet theme={theme} full>
            <Banner message="Under development" />
            <Router basename="/">
                <Header />
                <Main pad={padding} overflow="auto" fill>
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
            </Router>
            <Footer />
        </Grommet>
    );
};

export default App;
