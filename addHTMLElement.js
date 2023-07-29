class AddHtmlElement {
  constructor() {}

  addElement(container, elementObj, type, text) {
    let htmlElement;
    switch (type) {
      case "div":
        htmlElement = document.createElement("div");
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "img":
        htmlElement = document.createElement("img");
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "ul":
        htmlElement = document.createElement("ul");
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "li":
        htmlElement = document.createElement("li");
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
          container.appendChild(htmlElement);
        }
        return htmlElement;
      case "button":
        htmlElement = document.createElement("button");
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "table":
        htmlElement = document.createElement("table");
        container.appendChild(htmlElement);
        return htmlElement;
      case "td":
        htmlElement = document.createElement("td");
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "tr":
        htmlElement = document.createElement("tr");
        container.appendChild(htmlElement);
        return htmlElement;
      case "th":
        htmlElement = document.createElement("th");
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
    }
  }
}

export { AddHtmlElement };
