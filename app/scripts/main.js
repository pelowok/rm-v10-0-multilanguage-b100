


    function btnManager(){

        if (window.matchMedia("(max-width: 767px)").matches) {
            /* the view port is at less than 768 pixels wide */

            $("#btnCTA").removeClass("disabled");

            $("#awardsection").addClass("pad-30");

            $("#form-container").removeClass("main-form-block");
            $("#form-container").addClass("main-form-block-xs");


            document.getElementById("herosplash").style.maxHeight = '';

        } else {
            /* the view port is more than 768 pixels wide */

            $("#btnCTA").addClass("disabled");

            $("#awardsection").removeClass("pad-30");

            $("#form-container").removeClass("main-form-block-xs");
            $("#form-container").addClass("main-form-block");

            document.getElementById("herosplash").style.maxHeight = '70vh';

        };

    }

    window.addEventListener('load', btnManager, false);
    window.addEventListener('resize', btnManager, false);

