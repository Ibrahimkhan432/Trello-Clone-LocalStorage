const boxes = document.querySelectorAll(".box");

const addTask = (event) => {
  event.preventDefault();

  const currentForm = event.target; // current form element
  const value = currentForm.elements[0].value; // value written in form's input
  const parent = currentForm.parentElement; // parent of form i.e div.column
  const ticket = createTicket(value); // div to be added

  parent.insertBefore(ticket, currentForm); // adding new task before the form

  currentForm.reset(); // clearing form
};

for (let i = 0; i < boxes.length; i++) {
  const form = boxes[i].lastElementChild; // selecting every column's form because form is last element

  form.addEventListener("submit", addTask);
}

const createTicket = (value) => {
  //
  const ticket = document.createElement("p");
  const elementText = document.createTextNode(value);

  ticket.setAttribute("draggable", "true");
  ticket.appendChild(elementText);

  return ticket;

};
