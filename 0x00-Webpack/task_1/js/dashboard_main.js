import $ from "jquery";
import debounce from "lodash/debounce";

// Create and append the paragraph elements
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");

// Create and append the button element
const button = $("<button></button>").text("Click here to get started");
$("body").append(button);

// Create and append the paragraph element with id 'count'
const countParagraph = $("<p></p>").attr("id", "count");
$("body").append(countParagraph);

// Create and append the last paragraph element
$("body").append("<p>Copyright - Holberton School</p>");

let count = 0;

// Function to update the counter and set the content of the count paragraph
const updateCounter = () => {
  count++;
  countParagraph.text(`${count} clicks on the button`);
};

// Bind debounce function to the button's click event
button.on("click", debounce(updateCounter, 200));
