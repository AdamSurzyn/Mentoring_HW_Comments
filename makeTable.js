import { AddHtmlElement } from "./addHTMLElement.js";

class Table {
  constructor(container) {
    this.container = container;
    this.htmlCreate = new AddHtmlElement();
  }

  addRow(table, rowData) {
    const row = this.htmlCreate.addElement(table, {}, "tr", "");
    rowData.map((cell) => {
      this.addCell(row, cell);
    });
    table.appendChild(row);
    return row;
  }
  removeRow(rowId) {
    const rowToRemove = document.querySelector(`#${rowId}`);
    this.container.removeChild(rowToRemove);
  }
  createTable() {
    const table = this.htmlCreate.addElement(this.container, {}, "table", "");
    return table;
  }
  addHeader(table, headerData) {
    const header = this.htmlCreate.addElement(table, {}, "th", "");
    headerData.map((cell) => {
      this.addCell(header, cell);
    });
    table.appendChild(header);
    return header;
  }
  addCell(row, text) {
    const cell = this.htmlCreate.addElement(row, {}, "td", text);
    row.appendChild(cell);
    return cell;
  }

  highlightBlasphemy() {}

  addTableToContainer(table) {
    this.container.appendChild(table);
  }
}

export { Table };
