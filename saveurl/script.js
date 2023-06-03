const inputText = document.getElementById("in-text");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tabs-btn");
const deleteBtn = document.getElementById("delete-btn");
const displayEl = document.getElementById("display-url");
let allUrl = [];
if (JSON.parse(localStorage.getItem("url"))) {
  render(JSON.parse(localStorage.getItem("url")));
}
saveBtn.addEventListener("click", () => {
  localData = JSON.parse(localStorage.getItem("url"));
  if (localData && !localData.includes(inputText.value)) {
    allUrl = JSON.parse(localStorage.getItem("url"));
    allUrl.push(inputText.value);
    localStorage.setItem("url", JSON.stringify(allUrl));
    console.log(allUrl);
    render(JSON.parse(localStorage.getItem("url")));
    inputText.value = "";
  } else {
    allUrl.push(inputText.value);
    localStorage.setItem("url", JSON.stringify(allUrl));
    console.log(allUrl);
    render(JSON.parse(localStorage.getItem("url")));
    inputText.value = "";
  }
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  allUrl = [];
  render(allUrl);
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (JSON.parse(localStorage.getItem("url"))) {
      // allUrl = JSON.parse(localStorage.getItem("url"));
      // allUrl.push(tabs[0].url);
      // localStorage.setItem("url", JSON.stringify(allUrl));
      // render(JSON.parse(localStorage.getItem("url")));
      // inputText.value = "";
      console.log(tabs);
    }  
    else {
      // allUrl.push(tabs[0].url);
      // localStorage.setItem("url", JSON.stringify(allUrl));
      // render(JSON.parse(localStorage.getItem("url")));
      // inputText.value = "";
    }
  });
});

function render(arr) {
  let templete = "";
  for (let i = 0; i < arr.length; i++) {
    templete += `
          <li>
              <a target='_blank' href='${arr[i]}'>
                  ${arr[i]}
              </a>
          </li>
      `;
  }
  displayEl.innerHTML = templete;
}

