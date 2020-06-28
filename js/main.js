$(document).ready(function() {
    $('#example').DataTable({

    });
});
//
$(document).ready(function() {
    $('#example1').DataTable({

    });
});
//  siside bar scripts here

$(window).load(function() {
    // Animate loader off screen
    $("#loader").delay(1000).fadeOut("fast,  0.35");;
});


$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});

function togglePassword() {
    var input = document.getElementById('password');
    var icon = document.getElementById('icon');
    if (input.type === "password") {
        input.type = "text";
        icon.classList.add('selected');
    } else {
        input.type = "password";
        icon.classList.remove('selected');
    }
};
