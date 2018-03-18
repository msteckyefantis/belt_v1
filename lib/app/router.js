'use strict'

const React = require( 'react' );
const e = React.createElement;

const {

    Router,
    Switch,
    Route,
    // Redirect

} = require( 'react-router-dom' );

const createBrowserHistory = require( 'history/createBrowserHistory' ).default;

const browserHistory = createBrowserHistory();

const {

    Home,
    Onboard,
    EmployerDashboard,
    EmployeeDashboard

} = require( './pages/index.js' );



module.exports = class TheAppRouter extends React.Component {

    render() {

        return e(

            Router,

            {
                history: browserHistory,
            },

            e(
                Switch,

                null,

                e(
                    Route,

                    {
                        component: Onboard,

                        path: '/onboard'
                    }
                ),

                e(
                    Route,

                    {
                        component: EmployerDashboard,

                        path: '/employer_dashboard'
                    }
                ),

                e(
                    Route,

                    {
                        component: EmployeeDashboard,

                        path: '/employee_dashboard'
                    }
                ),

                e(
                    Route,

                    {
                        component: Home,
                    }
                )
            )
        );
    }
}
