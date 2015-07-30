

function toggleContactInfo(div)
{
    var className = div.getAttribute("class");
    var btn = document.getElementById('btnContact');

    if (className.indexOf("contactus") > -1) {
        div.className = "col-xs-10 brand-contact contactinfo";
        btn.innerHTML = 'US (123)123-1234';

    }
    else {
        div.className = "col-xs-10 brand-contact contactus";
        btn.innerHTML = 'Contact Us';
    }
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
            nav.css('position', 'fixed');
            nav.css('top', '-3%');
            nav.css('right', '5%');
            nav.css('opacity', '1');
            nav.css('z-index', '1000');
        } else {
            nav.css('top','auto');
            //nav.css('top','412px');
            nav.css('right','5%');
            nav.css('position', 'absolute');
            nav.css('z-index', '1000');
        }
    });
});

