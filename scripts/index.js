const initialCards = [
  {
    imageName: "Val Thorens",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    imageName: "Restaurant terrace",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    imageName: "An outdoor cafe",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    imageName: "A very long bridge, over the forest and through the trees",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    imageName: "Tunnel with morning light",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    imageName: "Mountain house",
    imageLink:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

//opening the edit profile form
const profileEditButton = document.querySelector(
  ".profile__edit-profile-button"
);
const profileEditModal = document.querySelector("#edit-profile-modal");

// call the form fields from the DOM.
const nameInput = document.querySelector(".profile__name");
const jobInput = document.querySelector(".profile__job");

// defining the profile elements from the DOM
const profileEditModalClose =
  profileEditModal.querySelector(".modal__close-btn");
const profileForm = document.forms["edit_profile"];
const profileNameElement = profileForm.elements["editProfileName"];
const profileJobElement = profileForm.elements["editProfileJob"];
//cards
const cardTemplate = document.querySelector("#card-template").content;

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__image-title");
  const cardLinkElement = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.imageName;
  cardLinkElement.src = data.imageLink;
  cardLinkElement.alt = data.imageName;

  return cardElement;
}

// use the same functions to add and remove to keep it simple
function openModal() {
  // Get the values of each form field from the value property
  // of the corresponding input element.
  nameInput.value = profileNameElement.value;
  jobInput.value = profileJobElement.value;
  profileEditModal.classList.add("modal_open");
}

function closeModal() {
  profileEditModal.classList.remove("modal_open");
}

function submitProfileForm(evt) {
  // Prevent default browser behavior, see explanation below.
  evt.preventDefault();

  // Updating profile info with form values
  nameInput.textContent = profileNameElement.value;
  jobInput.textContent = profileJobElement.value;
  // Close the modal after submit buy calling the close function
  closeModal();
}

// activate the functions
profileForm.addEventListener("submit", submitProfileForm);
profileEditButton.addEventListener("click", openModal);
profileEditModalClose.addEventListener("click", closeModal);
// Handle card creation
// Find the cards__list element only once and store it in a variable
const cardsListElement = document.querySelector(".cards__list");

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsListElement.prepend(cardElement); // Use the stored element
}
