import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes';

export default () => {
    return (
        <div>
            {renderRoutes(Routes)}
        </div>
    );
};