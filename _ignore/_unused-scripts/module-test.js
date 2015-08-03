/**
 * Created by Pelowok on 7/21/15.
 */


var MNIZ = MNIZ || {};

MNIZ.Test = function init(){
    var myMod = new MNIZ();

    myMod.myMethod(); // alerts "my method"
    myMod.myOtherMethod(); // alerts "my other method"

    return init;
}

$('document').ready(function(){ MNIZ.Test().init(); });