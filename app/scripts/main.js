

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

function scrollTest(elID)
{
    console.log('test');

    var dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 500);
}

$(document).ready(function () {

    var nav = ( $("#form-container") );

    $(window).scroll(function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() >= 460) {
            //nav.css('position', 'fixed');
            //nav.css('top', '-3%');
            //nav.css('right', 'auto');
            //nav.css('opacity', '1');
            //nav.css('z-index', '1000');

            nav.css('text-align','center');
            nav.css('background-color', 'rgba(240,240,240,1.0)');
            nav.css('z-index', '1000');
            nav.css('width', '380px');
            nav.css('position', 'fixed');

            nav.css('top', '0');

        } else {
            //nav.css('top','auto');
            //nav.css('right','auto');
            //nav.css('position', 'absolute');
            //nav.css('z-index', '1000');

            nav.css('text-align','center');
            nav.css('background-color', 'rgba(240,240,240,1.0)');
            nav.css('z-index', '1000');
            nav.css('width', '380px');
            nav.css('position', 'absolute');


        }
    });
});



