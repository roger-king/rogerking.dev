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
    const [selectedWork, setSelectedWork] = useState<Work>(workHistory[0]);

    return (
        <Grommet theme={theme}>
            <Banner message="Under development" />
            <Router basename="/">
                <Header />
                <ResponsiveContext.Consumer>
                    {(size: string) => {
                        const isMobile = size === 'small';
                        const padding = isMobile ? { left: '50px', right: '50px' } : { left: '150px', right: '150px' };

                        return (
                            <Main pad={{ ...padding, bottom: '40px' }} flex="grow" basis="full">
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
                        );
                    }}
                </ResponsiveContext.Consumer>
            </Router>
            <Footer />
        </Grommet>
    );
};

export default App;
