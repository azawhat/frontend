// declare variables
let currentElement = "";   // current dragged element
let list = document.getElementById("list"); // list container
let modal = document.getElementById("modal"); // modal for success message
let promoCodeSpan = document.getElementById("promoCode"); // promo code span element
let initialX = 0,
  initialY = 0; // initial coordinates for drag start
let section = document.querySelector("section"); // section element

// check if the device supports touch events
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

// function to create list items based on the provided count
const creator = (count) => {
  const courses = [
    { title: "Financial Intelligence: From Basics to Advanced Strategies", price: "$59" },
    { title: "Mastering React to Advanced Techniques", price: "$199" },
    { title: "Game Development Mastery", price: "$109" },
    { title: "Comprehensive Photoshop and Design Mastery", price: "$79" },
    { title: "Online Reselling Strategies", price: "$69" },
  ];

  // loop to generate list items with titles and prices
  for (let i = 0; i < count; i++) {
    list.innerHTML += `<li class="list-item" data-price="${courses[i].price}">${courses[i].title}</li>`;
  }
};

// function to get the position of a list item based on its price
const getPosition = (price) => {
  let elementIndex;
  let listItems = document.querySelectorAll(".list-item");
  listItems.forEach((element, index) => {
    let elementPrice = element.getAttribute("data-price");
    if (price === elementPrice) {
      elementIndex = index;
    }
  });
  return elementIndex;
};

// function to handle drag start event
function dragStart(e) {
  initialX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
  initialY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
  currentElement = e.target;
}

// function to handle drag over event
function dragOver(e) {
  e.preventDefault();
}

// function to handle drop event
const drop = (e) => {
  e.preventDefault();
  let newX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
  let newY = isTouchDevice() ? e.touches[0].clientY : e.clientY;

  let targetElement = document.elementFromPoint(newX, newY);
  let currentPrice = currentElement.getAttribute("data-price");
  let targetPrice = targetElement.getAttribute("data-price");
  let [currentPosition, targetPosition] = [
    getPosition(currentPrice),
    getPosition(targetPrice),
  ];
  initialX = newX;
  initialY = newY;

  try {
    if (currentPosition < targetPosition) {
      targetElement.insertAdjacentElement("afterend", currentElement);
    } else {
      targetElement.insertAdjacentElement("beforebegin", currentElement);
    }
  } catch (err) {}

  checkAnswer();
};

// function to check if the answer is correct
const checkAnswer = () => {
  const listItems = document.querySelectorAll(".list-item");
  const sortedPrices = Array.from(listItems)
    .map((item) => item.getAttribute("data-price"))
    .sort((a, b) => {
      const priceA = parseInt(a.slice(1));
      const priceB = parseInt(b.slice(1));
      return priceB - priceA;
    });

  if (
    JSON.stringify(sortedPrices) ===
    JSON.stringify(
      Array.from(listItems).map((item) => item.getAttribute("data-price"))
    )
  ) {
    // if answer is correct, show modal and add 'active' class to section
    showModal();
    section.classList.add("active");
  }
};

// function to execute on window load
window.onload = async () => {
  list.innerHTML = "";
  await creator(5);

  // add drag and touch event listeners to each list item
  let listItems = document.querySelectorAll(".list-item");
  listItems.forEach((element) => {
    element.draggable = true;
    element.addEventListener("dragstart", dragStart, false);
    element.addEventListener("dragover", dragOver, false);
    element.addEventListener("drop", drop, false);
    element.addEventListener("touchstart", dragStart, false);
    element.addEventListener("touchmove", drop, false);
  });
};

// function to navigate back to the index.html page
const goBack = () => {
    modal.style.display = "none";
    window.location.href = "index.html"; // goes back to index.html
};

// function to show the modal
const showModal = () => {
  modal.style.display = "block";
};
