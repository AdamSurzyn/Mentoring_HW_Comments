class AddHtmlElement {
  constructor() {}

  addElement({ container, type, text, htmlClass, ...elementObj }) {
    let htmlElement;
    switch (type) {
      case "div":
        htmlElement = document.createElement("div");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "img":
        htmlElement = document.createElement("img");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "ul":
        htmlElement = document.createElement("ul");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "li":
        htmlElement = document.createElement("li");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "button":
        htmlElement = document.createElement("button");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "table":
        htmlElement = document.createElement("table");
        htmlElement.classList.add(htmlClass);
        container.appendChild(htmlElement);
        return htmlElement;
      case "td":
        htmlElement = document.createElement("td");
        //htmlElement.classList.add(htmlClass);
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "tr":
        htmlElement = document.createElement("tr");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "th":
        htmlElement = document.createElement("th");
        //htmlElement.classList.add(htmlClass);
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "input":
        htmlElement = document.createElement("input");
        htmlElement.classList.add(htmlClass);
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
    }
  }
}

export { AddHtmlElement };
