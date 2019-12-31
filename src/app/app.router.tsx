import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ContactPage, HomePage } from './pages';

const AppRouter: React.FC<{}> = (): JSX.Element => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
        </Switch>
    );
};

export default AppRouter;
