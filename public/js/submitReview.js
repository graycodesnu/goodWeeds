// user clicks button, toggles between hiding and showing dropdown content 
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// close dropdown menu if user clicks outside of it 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// append dropdown selection
function getOption() {
  // console.log('hey bestie');

  selectElement = document.querySelector('.select');
  // console.log(selectElement);

  // var val1 = output = selectElement.value;
  // console.log(val1);

  // console.log(output1);

  // var x = document.getElementsByClassName("select").value;
  // console.log(x);

  // document.getElementsByClassName("output").innerHTML = x;

  var text = selectElement.options[selectElement.selectedIndex].text;
console.log(text);

var output1 = document.querySelector('.output').textContent = "something";
console.log(output1);
}


// ***** Submit Review Functionality *****


async function newFormHandler(event) {
  event.preventDefault();
  const strain_title = document.querySelector('#strain_title').value;
  const user_review = document.querySelector('#user_review').value;

  console.log('#strain_title');
  console.log('#user_review');
  
// The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
  // *!const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
// Send fetch request to add a new dish
  const response = await fetch(`/postreview`, {
    method: 'POST',
    body: JSON.stringify({   
      strain_title,
      user_review,

      // ?! Is this the correct way to call username for the reviewer?
      // username,
      // has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add review');
  }
}

// !document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
  