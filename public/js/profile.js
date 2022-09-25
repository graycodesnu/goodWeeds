// onClick Tab 
function clickHandle(evt, tabTitle) {
  let i, tabcontent, tablinks;

  // This is to clear the previous clicked content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log('cleared data');
  }

  // Set the tab to be "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
    console.log('active tab');
  }

  // Display the clicked tab and set it to active
  document.getElementById(tabTitle).style.display = "block";
  evt.currentTarget.className += "active";
  console.log('display content');
}