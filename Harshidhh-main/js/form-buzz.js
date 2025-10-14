var tpj2=jQuery;
        
tpj2.noConflict();
tpj2(document).ready(function () {
    tpj2(".click1").click(function () {
        if (parseInt(tpj2('#ispopupopen').val())) {
            tpj2('#onload').modal('show');
            tpj2('#ispopupopen').val(0);
        }
    });
    tpj2(".click2").click(function () {
        if (parseInt(tpj2('#ispopupopen').val())) {
            tpj2('#onload1').modal('show');
            tpj2('#ispopupopen').val(0);
        }
    });
    tpj2(".click4").click(function () {
        if (parseInt(tpj2('#ispopupopen').val())) {
            tpj2('#onloadd').modal('show');
            tpj2('#ispopupopen').val(0);
        }
    });



    tpj2("#onload").on('hide.bs.modal', function () {
        tpj2('#ispopupopen').val(1);
        onClick();
    });

    tpj2("#onload1").on('hide.bs.modal', function () {
        tpj2('#ispopupopen').val(1);
        onClick();
    });

    tpj2(".stick_close").click(function () {
        if (parseInt(tpj2('#ispopupopen').val())) {
            tpj2('#onload').modal('hide');
            tpj2('#ispopupopen').val(1);
        }
    });

});



tpj2.noConflict();
    tpj2(document).ready(function() {
        tpj2(".click2").click(function(event) {
            var hreff = tpj2(this).attr('pdf');
            document.getElementById('pt').value = hreff;
            tpj2("#contactdiv").css("display", "block");
            event.preventDefault();
        });
    });
    
g_timer = null;

tpj2(document).ready(function () {
    startTimer();
});

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function buzzbtn() {
    tpj2('.sticklist').addClass('vibrate-3');
    //tpj2('#sideService').addClass('open');
    setTimeout(function () {
        //tpj2('#sideService').removeClass('open');
        tpj2('.sticklist').removeClass('vibrate-3');

    }, 10000);
}

tpj2(".sticklist ").mouseover(function () {
    tpj2(this).removeClass('vibrate-3');
});




function startTimer() {
    g_timer = window.setInterval(function () {
        // var today = new Date();
        var cookiesisset = getCookie('isloadopenmodel');
        console.log(parseInt(tpj2('#ispopupopen').val()) + "---" + cookiesisset);
        if (parseInt(tpj2('#ispopupopen').val()) && tpj2('#inquiery-model').val() != 'inquiryset' && parseInt(cookiesisset) != '1') {
            if(tpj2("#ismobile").val() == 0){
            tpj2('#onload').modal('show');
            tpj2('#ispopupopen').val(0);
            document.cookie = "isloadopenmodel=1";
        }
            //buzzbtn();
        } else if (parseInt(tpj2('#ispopupopen').val()) && cookiesisset == '1') {
            // tpj2('#onload').modal('show');
            // tpj2('#ispopupopen').val(0);
            buzzbtn();
        }
    }, 20000);
}

function onClick() {
    if(tpj2("#ismobile").val() == 0){
        clearTimeout(g_timer);
        // var today = new Date();
        // console.log("cancle model" + today)
        startTimer();
    }
}


// phone number validation 
tpj2(".number21").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        tpj2("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
    }
});


tpj2(document).ready(function () {
    tpj2(".open-close-arrow").click(function () {
        tpj2(".open-close-arrow").toggleClass("open");
        tpj2(".sticklist ul").toggleClass("open");
    });
});






