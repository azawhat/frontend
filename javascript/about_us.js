const learnMoreButton = document.getElementById("learn-more-button");

learnMoreButton.addEventListener("click", () => {
    alert("Since you are interested in us, we have for you a short quiz where you can get a discount.");
    window.location.href = "discountQuiz.html";
});


function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
  
    // hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // get all elements with tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // show current tab, make active new tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


