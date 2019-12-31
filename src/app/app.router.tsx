import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ContactPage, HomePage, WorkPage } from './pages';

const AppRouter: React.FC<{}> = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRouter;
