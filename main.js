// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

mimicServerCall("http://mimicServer.example.com")
.then(success => {
  const likeElements = document.querySelectorAll('.like')
  likeElements.forEach(likeElement => {
    const heart = likeElement.querySelector('.like-glyph')
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')

    heart.addEventListener('click', () => {
      if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART
        heart.classList.remove('activated-heart')
      } else {
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      }
    })
  })

})
.catch(error => {
  const modal = document.querySelector('#modal')
  const modalHeader = document.querySelector('#modal h2')
  modal.classList.remove('hidden')
  modalHeader.append(' ', error)
  setTimeout(function(){
    modal.classList.add('hidden')
  }, 10000)
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}