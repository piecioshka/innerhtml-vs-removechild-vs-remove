const $el1 = document.querySelector(".inner-html");
const $el2 = document.querySelector(".remove-child");
const $el3 = document.querySelector(".remove");
const $el4 = document.createElement("div");
const $el5 = document.createElement("div");
const $el6 = document.createElement("div");

const LIMIT = 100_000;

function doInnerHTML($element) {
  $element.innerHTML = "";
}
function doRemoveChild($element) {
  while ($element.firstElementChild) {
    $element.removeChild($element.firstElementChild);
  }
}
function doRemove($element) {
  while ($element.firstElementChild) {
    $element.firstElementChild.remove();
  }
}

function createElements($container) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < LIMIT; i++) {
    fragment.append(document.createElement("span"));
  }
  $container.append(fragment);
}

function perform($element, operation, label) {
  const startTime = Date.now();
  for (let i = 0; i < LIMIT; i++) {
    operation($element);
  }
  const endTime = Date.now();

  console.log(`[${label}] ${endTime - startTime} ms`);
}

function main() {
  createElements($el1);
  createElements($el2);
  createElements($el3);

  perform($el1, doInnerHTML, "Element exists in DOM: innerHTML");
  perform($el2, doRemoveChild, "Element exists in DOM: removeChild()");
  perform($el3, doRemove, "Element exists in DOM: remove()");

  perform($el4, doInnerHTML, "Element does not exists in DOM: innerHTML");
  perform(
    $el5,
    doRemoveChild,
    "Element does not exists in DOM: removeChild()"
  );
  perform($el6, doRemove, "Element does not exists in DOM: remove()");
}

main();
