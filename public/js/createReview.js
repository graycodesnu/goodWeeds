async function newPostFormHandler(event) {
    console.log("CLICKEDDDDD")
    event.preventDefault();

    const rating = document.querySelector('#postRating').value.trim();
    
    const comment = document.querySelector('#postRevInpDescDiv').value.trim();
    // const strain_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1];

    if (rating && comment) {
        const response = await fetch(`/postReview`, {
            method: 'POST',
            body: JSON.stringify({  rating, comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post!');
        }
    }

}

document.querySelector('.postReview').addEventListener('submit', newPostFormHandler);