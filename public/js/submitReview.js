// const { text } = require("express");


// ***** Submit Review Functionality *****
console.log('connected');

const tag = document.getElementsByTagName('option');
console.log(tag);

async function reviewSubmit(event) {
  event.preventDefault();

  const revTitle = document.querySelector('#title').value;
  console.log(revTitle);

  const strainId = Number(document.querySelector('#strains').value);
  // const strainId = Number(strainTitle);
    console.log(strainId);

  const userReview = document.querySelector('#content').value;
    console.log(userReview);

  const optionValue = document.querySelector('#strains');
  const optionText = optionValue.options[optionValue.selectedIndex].text;
    console.log(optionText)

  // * Rating Buttons
  // var btnVal = document.getElementById('#rating').value;
  // console.log(btnVal);

  const response = await fetch(`/reviews`, {
    method: 'POST',
    body: JSON.stringify({
      title: revTitle,
      strain_id: strainId,
      content: userReview,
      strain_name: optionText,
    }),
    headers: {
    'Content-Type': 'application/json',
    },
  })

  if (response.ok) {
    document.location.reload();
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