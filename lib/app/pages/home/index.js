'use strict';

const React = require( 'react' );

const Title = require( './title' );

const MainMessage = require( './main_message.js' );

const e = React.createElement;


module.exports = class HomePage extends React.Component {

    render() {

        return e(

            'div',

            {
                style: {

                    order: 1,

                    width: '100%',

                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexFlow: 'column',
                },
            },

            e(
                Title,

                {
                    order: 1,
                }
            ),

            e(
                MainMessage,

                {
                    order: 2,
                }
            )
        );
    }
}
