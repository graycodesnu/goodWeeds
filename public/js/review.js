// user clicks button, toggles between hiding and showing dropdown content 
function dropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
  console.log('reading!');
}


// close dropdown menu if user clicks outside of it 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    console.log('getting dropdown content');
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}