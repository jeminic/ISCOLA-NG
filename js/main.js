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

function tab(evt, tabName) {
    // Declare all variables
    var t, tabcontent, tabbtn;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (t = 0; t < tabcontent.length; t++) {
      tabcontent[t].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabbtn = document.getElementsByClassName("tabbtn");
    for (t = 0; t < tabbtn.length; t++) {
      tabbtn[t].className = tabbtn[t].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.className += " active";

   
  }
  function tab2(evt, tabName) {
    // Declare all variables
    var t, tabcontent, tabbtn;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (t = 0; t < tabcontent.length; t++) {
      tabcontent[t].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tabbtn = document.getElementsByClassName("tabbtn2");
    for (t = 0; t < tabbtn.length; t++) {
      tabbtn[t].className = tabbtn[t].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.className += " active";

   
  }


