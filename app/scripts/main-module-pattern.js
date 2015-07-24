/**
 * Created by Pelowok on 7/21/15.
 */

var MNIZ = MNIZ || {};

MNIZ.Main = ( function( window, undefined ) {

    // this object is used to store private variables and methods across multiple instantiations
    var pub = {};

    function Main() {

        this.myMethod = function myMethod() {
            // media query event handler

            var mm = window.matchMedia( "(min-width: 500px)" );

            if (mm.matches) {
                var mq = window.matchMedia("(min-width: 500px)");
                mq.addListener(WidthChange);
                WidthChange(mq);
            }

            console.log('it ran');

        };

        // media query change
        function WidthChange(mq) {

            if (mq.matches) {
                // window width is at least 500px
            }
            else {
                // window width is less than 500px
            }

            alert('min-width: ' + window.min-width + '/ninnerWidth: ' + window.innerWidth + '/nouterWidth: ' + window.outerWidth);

        };

        this.myOtherMethod = function myOtherMethod() {
            //alert( 'my other method' );
        };

    }



    pub.exampleVariable1 = 'potato';

    return Main;

} )( window );

