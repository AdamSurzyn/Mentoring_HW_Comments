import { AddHtmlElement } from "./addHTMLElement.js";
import { ApiCall } from "./apiCall.js";
import { Table } from "./makeTable.js";

async function renderMain() {
  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
  const commentsApiCall = new ApiCall();
  const commentsData = await commentsApiCall.getApiData(commentsUrl);
  addCommentsTable(await commentsData);
}

function addCommentsTable(comments) {
  const tableContainer = addTableContainer();
  const htmlClass = new AddHtmlElement();
  const commentsTableClass = new Table(tableContainer);
  const commentsTable = commentsTableClass.createTable();
  const amountOfComments = 10;
  addHeader(commentsTable, commentsTableClass);
  addCommentRows(
    amountOfComments,
    commentsTable,
    comments,
    commentsTableClass,
    htmlClass
  );
}

function addCommentRows(amount, table, comments, tableClass, htmlClass) {
  for (let i = 0; i < amount; i++) {
    let curRowData = getDataForRow(comments[i]);
    let id = getCommentId(curRowData);
    let row = tableClass.addRow(table, curRowData, id);
    const lastRowCell = tableClass.addCell(row, "");
    const rmvButton = addRemoveButton(
      lastRowCell,
      tableClass,
      htmlClass,
      id,
      table
    );
  }
}

function getCommentId(comment) {
  const id = comment[comment.length - 1];
  comment.pop();
  return id;
}

function getDataForRow(commentObj) {
  const rowData = [];
  rowData.push(
    commentObj.name,
    commentObj.email,
    commentObj.body,
    commentObj.id
  );
  return rowData;
}

function addTableContainer() {
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-container");
  document.body.appendChild(tableContainer);
  return tableContainer;
}

function addHeader(table, tableClass) {
  const headerCells = ["Name", "Email", "Body", "Action"];
  tableClass.addHeader(table, headerCells);
}

function addRemoveButton(container, tableClass, htmlClass, id, table) {
  const rmvButtonObj = {
    container: container,
    htmlClass: "remove-comment-btn",
    text: "Remove",
    type: "button",
  };
  const rmvButton = htmlClass.addElement(rmvButtonObj);
  rmvButton.addEventListener("click", () => {
    tableClass.removeRow(id, table);
  });
}
renderMain();
