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
// const strainTitle = document.querySelector('#strains').value;
// const strain_title = Number(strainTitle);
//   console.log(strain_title);

// ***** Submit Review Functionality *****
console.log('connected');

const tag = document.getElementsByTagName('option');
console.log(tag);

// const languages = document.getElementById('strainOpt');
// console.log(languages);

// var valueNum = languages.options[languages.selectedIndex].value;
// console.log("THIS IS A VALUE", strainOpt.value);

// var textVal = languages.options[languages.selectedIndex].innerText;
// console.log("THIS IS TEXT", strainOpt.innerText);


async function reviewSubmit(event) {
  event.preventDefault();

  const revTitle = document.querySelector('#title').value;
  console.log(revTitle);

  const strainId = Number(document.querySelector('#strains').value);
  // const strainId = Number(strainTitle);
    console.log(strainId);

  const userReview = document.querySelector('#content').value;
    console.log(userReview);
  
  // * Rating Buttons
  // var btnVal = document.getElementById('#rating').value;
  // console.log(btnVal);

  const response = await fetch(`/reviews`, {
    method: 'POST',
    body: JSON.stringify({
      title: revTitle,
      strain_id: strainId,
      content: userReview
    }),
    headers: {
    'Content-Type': 'application/json',
    },
  })

  // if (response.ok) {
  //   document.location.replace('/allReviews');
  // } else {
  //   alert('failed to add review');
  // }

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