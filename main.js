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
  const commentsTableClass = new Table(tableContainer);
  const commentsTable = commentsTableClass.createTable();
  const amountOfComments = 10;
  addCommentRows(amountOfComments, commentsTable, comments, commentsTableClass);
}

function addCommentRows(amount, table, comments, tableClass) {
  for (let i = 0; i < amount; i++) {
    let curRowData = getDataForRow(comments[i]);
    let id = getCommentId(curRowData);
    let row = tableClass.addRow(table, curRowData);
    row.setAttribute("id", id);
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
    commentObj.postId
  );
  return rowData;
}

function addTableContainer() {
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-container");
  document.body.appendChild(tableContainer);
  return tableContainer;
}

renderMain();
