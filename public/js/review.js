// register handlebars helper 
window.Handlebars.registerHelper('select', function( value, options ){
  var $el = $('<select />').html( options.fn(this) );
  $el.find('[value="' + value + '"]').attr({'selected':'selected'});
  return $el.html();
});


// user clicks button, toggles between hiding and showing dropdown content 
function dropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// close dropdown menu if user clicks outside of it 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0 i < dropdowns.length; i++) {
      let (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}