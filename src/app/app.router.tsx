import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AboutPage, ContactPage, HomePage } from './pages';

const AppRouter: React.FC<{}> = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRouter;
