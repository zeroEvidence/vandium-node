'use strict';

/*jshint expr: true*/

const expect = require( 'chai' ).expect;

const custom = require( '../../../lib/event_types/custom' );

describe( 'lib/event_types/custom', function() {

    it( 'normal operation', function() {

        let lambda = custom();

        expect( lambda.finally ).to.exist;
        expect( lambda.finally ).to.be.a( 'function' );

        expect( lambda.handler ).to.exist;
        expect( lambda.handler ).to.be.a( 'function' );
    });
});
