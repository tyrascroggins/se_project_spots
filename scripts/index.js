const initialCards = [
    { Name: "Val Thorens", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
    { Name: "Restaurant terrace", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
    { Name: "An outdoor cafe", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg" },
    { Name: "A very long bridge, over the forest and through the trees", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg" },
    { Name: "Tunnel with morning light", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg" },
    { Name: "Mountain house", Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg" }
  ];
  
  //opening the edit profile form
const profileEditButton = document.querySelector('.profile__edit-profile-button');
const profileEditModal = document.querySelector('#edit-profile-modal');
// call the form fields from the DOM.
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__job');
// defining the profile elements from the DOM
const profileEditModalClose = profileEditModal.querySelector('.modal__close-btn');
const profileFormElement = profileEditModal.querySelector('.modal__form');
const profileNameElement = profileEditModal.querySelector('#profile-person-input');
const profileJobElement = profileEditModal.querySelector('#profile-description-input');

const cardTemplate = document.querySelector('#card-template').content;
const cardElement = cardTemplate.cloneNode(true);

function getCardElement() {

}

// use the same functions to add and remove to keep it simple
function modalOpened() {
 // Get the values of each form field from the value property 
 // of the corresponding input element.
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileJobElement.textContent;
profileEditModal.classList.add('modal__opened');
}

function modalClosed() {
profileEditModal.classList.remove('modal__opened');
}

function handleProfileFormSubmit(evt) {
  // Prevent default browser behavior, see explanation below. 
  evt.preventDefault(); 

  // insert the new values input into the textContent property 
  nameInput.textContent = profileNameElement.value;
  jobInput.textContent = profileNameElement.value;
  // TODO: Close the modal after submit buy calling the close function
  modalClosed();
}


// activate the functions
profileFormElement.addEventListener('submit', handleProfileFormSubmit);
profileEditButton.addEventListener("click", modalOpened);
profileEditModalClose.addEventListener("click", modalClosed);







