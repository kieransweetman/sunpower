const first_form = document.querySelector("#ent_first_form_page");
const second_form = document.querySelector("#ent_second_form_page");
const third_form = document.querySelector("#ent_third_form_page");

const first_form_attr = first_form.getAttribute("class");
const second_form_attr = second_form.getAttribute("class");
const third_form_attr = third_form.getAttribute("class");

second_form.setAttribute("class", "hide");
third_form.setAttribute("class", "hide");

function first_next() {
  first_form.setAttribute("class", "hide");
  second_form.setAttribute("class", second_form_attr);
  return false;
}
function second_back() {
  second_form.setAttribute("class", "hide");
  first_form.setAttribute("class", first_form_attr);
  return false;
}
function second_next() {
  second_form.setAttribute("class", "hide");
  third_form.setAttribute("class", third_form_attr);
  return false;
}
function third_back() {
  third_form.setAttribute("class", "hide");
  second_form.setAttribute("class", second_form_attr);
  return false;
}
