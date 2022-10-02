// * append dropdown selection
// function getOption() {
  // console.log('hey bestie');

  // selectElement = document.querySelector('.select');
  // console.log(selectElement);

  // var val1 = output = selectElement.value;
  // console.log(val1);

  // console.log(output1);

  // var x = document.getElementsByClassName("select").value;
  // console.log(x);

  // document.getElementsByClassName("output").innerHTML = x;

//   var text = selectElement.options[selectElement.selectedIndex].text;
// console.log(text);

// var output1 = document.querySelector('.output').textContent = "something";
// console.log(output1);
// }


// ***** Submit Review Functionality *****
console.log('connected');

const tag = document.getElementsByTagName('option');
console.log(tag);

const languages = document.getElementById('strainOpt');
console.log(languages);

var valueNum = languages.options[languages.selectedIndex].value;
console.log("THIS IS A VALUE", strainOpt.value);

var textVal = languages.options[languages.selectedIndex].innerText;
console.log("THIS IS TEXT", strainOpt.innerText);


async function reviewSubmit(event) {
  event.preventDefault();

  const rev_title = document.querySelector('#title').value;
  console.log(rev_title);

  const strain_title = document.querySelector('#strain_id').value;
    console.log(strain_title);

  const user_review = document.querySelector('#content').value;
    console.log(user_review);
  
  // * Rating Buttons
  var btnVal = document.getElementById('#rating').value;
  console.log(btnVal);

  const response = await fetch(`/postReview`, {
    method: 'POST',
    body: JSON.stringify({
      rev_title,
      strain_title,
      user_review
    }),
    headers: {
    'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    document.location.replace('/allReviews.handlebars');
  } else {
    alert('failed to add review');
  }

}

//* Dropdown for strain IDs
// Toggle between hiding and showing dropdown content
// function strainDropdown(){
//   console.log("pls work hehe", strainDropdown);

//   document.getElementById("myDropdown").classList.toggle("show");
//   const drop = document.getElementById('myDropdown1').value();
//   console.log(drop);
// };

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

document.querySelector('.postReview').addEventListener('submit', reviewSubmit);