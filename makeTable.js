import { AddHtmlElement } from "./addHTMLElement.js";

class Table {
  constructor(container) {
    this.container = container;
    this.htmlCreate = new AddHtmlElement();
  }

  addRow(table, rowData, id) {
    const rowObj = {
      container: table,
      text: "",
      htmlClass: "comment-row",
      type: "tr",
      id: `row${id}`,
    };
    const row = this.htmlCreate.addElement(rowObj);
    rowData.map((cell) => {
      this.addCell(row, cell);
    });
    table.appendChild(row);
    return row;
  }

  removeRow(rowId, table) {
    const rowToRemove = document.querySelector(`#row${rowId}`);
    table.removeChild(rowToRemove);
  }

  createTable() {
    const tableObj = {
      container: this.container,
      text: "",
      htmlClass: "comments-table",
      type: "table",
    };
    const table = this.htmlCreate.addElement(tableObj);
    return table;
  }

  addHeader(table, headerData) {
    const headerRowObj = {
      container: table,
      text: "",
      htmlClass: "header-row",
      type: "tr",
    };
    const headerRow = this.htmlCreate.addElement(headerRowObj);
    headerData.map((cell) => {
      let headerCellObj = {
        container: headerRow,
        text: cell,
        htmlClass: "",
        type: "th",
      };
      this.htmlCreate.addElement(headerCellObj);
    });
    table.appendChild(headerRow);
    return headerRow;
  }

  addCell(row, text) {
    const cellObj = {
      container: row,
      text: text,
      htmlClass: "",
      type: "td",
    };
    const cell = this.htmlCreate.addElement(cellObj);
    row.appendChild(cell);
    return cell;
  }

  highlightBlasphemousRow(row, word) {
    const rowChildren = [...row.children];
    row.classList.remove("highlight-blasphemy");
    rowChildren.forEach((cell) => {
      let cellText = cell.innerHTML;
      if (cellText.includes(word) && word != "") {
        row.classList.add("highlight-blasphemy");
        return true;
      }
    });
    return false;
  }

  renderTable() {}
  //TODO: Instead of creating a table with the table class separately - use the table class to create a table object to pass. To do this, render table?

  addTableToContainer(table) {
    this.container.replaceChildren();
    this.container.appendChild(table);
  }
}

export { Table };
