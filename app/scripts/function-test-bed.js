'use strict';

//  file created 2015-07-15
//    by mynameiszak.com
//    <zak@mynameiszak.com>

//var MNIZ = MNIZ || {};
//
//MNIZ.Main = (function($) {
//
//    var pub = {};
//
//    var mainFunction = function (b) {
//        console.log('From inside MNIZ.Main.. mainFunction(' + b + ')');
//    };
//
//    var toggleVisibility = function(element) {
//        if(element.style.display=='block'){
//            element.style.display='none';
//        } else {
//            element.style.display='block';
//        }
//    };
//
//    function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//            e.style.display = 'none';
//        else
//            e.style.display = 'block';
//    }
//
//    pub.mainFunction = mainFunction();
//    pub.toggleVisibility = toggleVisibility();
//    pub.toggle_visibility = toggle_visibility;
//
//    return pub;
//
//})(jQuery.noConflict());

function toggleContactInfo()
{
    var btn = document.getElementById('btnContact');

    var foo = function(cb){
        cb = 'US';
        return cb;
    }

    var bar = function(cb){
        cb = '(123)123-1234';
        return cb;
    }

    btn.innerHTML = foo() + ': ' + bar();


}

function radioClickCheck(id){
    var inp = document.getElementById(id);
    alert(inp.value);

}

function toggleVisibility(id) {

    var e = document.getElementById(id);

    var s1a = document.getElementById('step1hideme1');
    var s1b = document.getElementById('step1hideme2');
    var s2 = document.getElementById('formblock');
    var cta = document.getElementById('main-cta');

    console.log('e.id : ' + e.id);

    switch (e)
    {
        case s1a:
            console.log(s1a);
            if(s1a.style.opacity < 0.9){
                s1a.style.opacity = 1;
                s1a.style.borderColor = 'white';
                s1b.style.opacity = 0.25;
                s1b.style.borderColor = 'transparent';
                s2.style.display = 'block';
                scrolltest('formblock');
            } else {
                s1a.style.opacity = 0.5;
                s1b.style.opacity = 0.5;
                s2.style.display = 'none';
            }
            break;

        case s1b:
            console.log(s1b);
            if(s1b.style.opacity < 0.9){
                s1a.style.opacity = 0.25;
                s1a.style.borderColor = 'transparent';
                s1b.style.opacity = 1;
                s1b.style.borderColor = 'white';
                s2.style.display = 'block';
                scrolltest('formblock');

            } else {
                s1a.style.opacity = 0.5;
                s1b.style.opacity = 0.5;
                s2.style.display = 'none';
            }
            break;

        case cta:
            scrolltest('main-cta');
            break;

        default:
            console.log('err');
            s1a.style.opacity = 0.5;
            s1a.style.borderColor = 'transparent';
            s1b.style.opacity = 0.5;
            s1b.style.borderColor = 'transparent';
            s2.style.display = 'none';
            break;
    }

    function scrollTo(to, duration) {
        if (document.body.scrollTop == to) return;
        var diff = to - document.body.scrollTop;
        var scrollStep = Math.PI / (duration / 10);
        var count = 0, currPos;
        var start = document.body.scrollTop;
        var scrollInterval = setInterval(function(){
            if (document.body.scrollTop != to) {
                count = count + 1;
                currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
                document.body.scrollTop = currPos;
            }
            else { clearInterval(scrollInterval); }
        },10);
    }

    function scrolltest(elID)
    {
        console.log('test');

        var dest = document.getElementById(elID);
        scrollTo(dest.offsetTop, 500);
    }
};



//e1.style.display = ((e1.style.display!='none') ? 'none' : 'block');

// formblock
// step1hideme1
// step1hideme2


