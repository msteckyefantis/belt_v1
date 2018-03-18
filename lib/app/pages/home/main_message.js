'use strict';

const React = require( 'react' );

const Paper = require( 'material-ui/Paper' ).default;

const e = React.createElement;


module.exports = class MainMessage extends React.Component {

    render() {

        const {

            order

        } = this.props;

        return e(

            Paper,

            {
                style: {

                    order,

                    width: '66%',
                    minWidth: 320,
                    // height: 150,
                    backgroundColor: 'teal',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexFlow: 'column',

                    marginTop: 100,
                    marginBottom: 100,
                },

                elevation: 12,
            },

            e(
                'h2',

                {
                    style: {

                        fontFamily: `'IBM Plex Serif', serif`,
                        order: 1,
                        color: 'white',
                        textAlign: 'center',

                        marginTop: 30,
                        marginBottom: 30,
                    },
                },

                'Empower your employees with blockchain technology.'
            )
        );
    }
}
