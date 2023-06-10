// Add event listeners to enable drag and drop functionality
var items = document.querySelectorAll(".item");
var containers = document.querySelectorAll(".container");
var successMessage = document.getElementById("successMessage");

// Add dragstart event listener to items
items.forEach(function (item) {
  item.addEventListener("dragstart", dragStart);
});

// Add dragover and drop event listeners to containers
containers.forEach(function (container) {
  container.addEventListener("dragover", dragOver);
  container.addEventListener("drop", drop);
});

// Function to handle dragstart event
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.itemId);
  event.target.style.opacity = "0.4";
}

// Function to handle dragover event
function dragOver(event) {
  event.preventDefault();
}

// Function to handle drop event
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var draggableElement = document.querySelector(
    '[data-item-id="' + data + '"]'
  );
  var dropzone = event.target.closest(".droppable");

  if (dropzone && draggableElement && !draggableElement.classList.contains("disabled")) {
    // Clone the draggable element
    var clonedElement = draggableElement.cloneNode(true);

    dropzone.appendChild(clonedElement);
    successMessage.innerText = "Item dropped successfully!";
    draggableElement.style.opacity = "1";

    // Disable the dragged item in the first container
    draggableElement.classList.add("disabled");
    draggableElement.draggable = false;

     // Disable dragging for the cloned item in the second container
     clonedElement.draggable = false;
  }
}

// Function to reset containers and success message
function resetContainers() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");

  container1.innerHTML = `
    <div class="item" draggable="true" data-item-id="item1">Item 1</div>
    <div class="item" draggable="true" data-item-id="item2">Item 2</div>
    <div class="item" draggable="true" data-item-id="item3">Item 3</div>
  `;

  container2.innerHTML = "";
  successMessage.innerText = "";

  var items = document.querySelectorAll(".item");

  // Add dragstart event listener to items
  items.forEach(function (item) {
    item.addEventListener("dragstart", dragStart);
  });
}

// Function to handle dragstart event
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.dataset.itemId);
  event.target.style.opacity = "0.4";
}
