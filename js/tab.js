function tab(act, tabName) {
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
    ocument.getElementById(tabName).style.display = "block";
    act.currentTarget.className += " active";
  }
