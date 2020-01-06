import React from 'react';

export const addLineBreak = (str: string): React.ReactFragment => {
    return str.split('\n').map((s: string) => (
        <React.Fragment key={`${s}`}>
            {s} <br />
            <br />{' '}
        </React.Fragment>
    ));
};
