document.getElementById("defaultOpen").click();


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

  // Get the element with id="defaultOpen" and click on it


$(document).ready(function() {
    $('#example').DataTable({
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        order: [
            [1, 'asc']
        ],

        dom: 'Bfrtip',
        buttons: [
            'selectAll',
            'selectNone',
        ],
        select: true
    });
});
//
$(document).ready(function() {
    $('#feesHistory').DataTable({
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        order: [
            [1, 'asc']
        ],

        dom: 'Bfrtip',
        buttons: [
            'selectAll',
            'selectNone',
        ],
        select: true
    });
});
//
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function tabDisplay(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "";
        tablinks[i].style.borderBottom = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    elmnt.style.color = '#F26419';
    elmnt.style.borderBottom = '3px solid #F26419';


}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();

function tabDisplay2(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tab-btn2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    elmnt.style.color = '#F26419';

}


