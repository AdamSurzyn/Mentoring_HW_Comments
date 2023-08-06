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
  console.log(comments);
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
  createSearchForm(
    document.body,
    "input blaspheny...",
    commentsTable,
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
    addRemoveButton(lastRowCell, tableClass, htmlClass, id, table);
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

function addHighlightButton(container, tableClass, htmlClass, table) {
  const blasphemy = ["sint", "corporis", "omnis"];
  const highlightButtonObj = {
    container: container,
    htmlClass: "highlight-btn",
    text: "Highlight Blasphemy!",
    type: "button",
  };
  const highlightButton = htmlClass.addElement(highlightButtonObj);
  highlightButton.addEventListener("click", () => {
    checkTableForBlasphemy(table, tableClass, blasphemy);
  });
}

function checkTableForBlasphemy(table, tableClass, word) {
  const tableChildren = [...table.children];
  tableChildren.forEach((row) => {
    tableClass.highlightBlasphemousRow(row, word);
  });
}

function createSearchForm(
  container,
  placeholder,
  table,
  tableClass,
  htmlClass
) {
  const inputObj = {
    container: container,
    htmlClass: "search-form",
    text: "",
    type: "input",
    placeholder: placeholder,
    name: "",
  };
  const input = htmlClass.addElement(inputObj);
  input.setAttribute("type", "text");
  //TODO: Can't set "type" in the input field because type is used by the class to determine what type of html element is being created!

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let name = e.srcElement.value;
      checkTableForBlasphemy(table, tableClass, name);
      //TODO: Create a search function for the table
      //TODO: You can search comments by id!!!
    }
  });
}

function searchFuntion() {}

renderMain();
