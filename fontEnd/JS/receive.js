// 以下是接收部分GUI的代码
const transferCodeInput = document.querySelector("#transferCodeReceive");
transferCodeInput.addEventListener("keydown", (e) => {
  // 允许数字键、字母键、删除键、箭头键、Tab键
  if (e.keyCode < 48 || e.keyCode > 90) {
    if (e.keyCode != 8 && e.keyCode != 37 && e.keyCode != 39 && e.keyCode != 9) {
      e.preventDefault();
    }
  }
});

const transferCodeReceive = document.querySelector("#transferCodeReceive");
const codeBtn = document.querySelector("#codeBtn");
transferCodeReceive.addEventListener("input", () => {
  let transferCodeReceiveValue = transferCodeReceive.value;
  if (transferCodeReceiveValue.length == 6) {
    // console.log(transferCodeReceiveValue);
    codeBtn.classList.add("codeBtnEnable");
  } else {
    codeBtn.classList.remove("codeBtnEnable");
  }
});


// 当用户点击“接收”按钮时，发送下载请求
codeBtn.addEventListener("click", () => {
  let transferCodeReceiveValue = transferCodeReceive.value;
  if (transferCodeReceiveValue.length == 6) {
    // console.log(transferCodeReceiveValue);
    // 发送获取下载链接请求
    const xhr = new XMLHttpRequest();

    const requestUrl = "http://localhost:5000/download/" + transferCodeReceiveValue;

    xhr.open("GET", requestUrl, true);
    xhr.responseType = "json";

    //打印响应
    xhr.onload = function () {
      if (this.status == 200) {
        const response = this.response;
        console.log(response);
        if (response != null) {
          // console.log(response["download_link"]);
          // 创建一个a标签
          const a = document.createElement("a");
          // a.style.display = "none";

          a.href = 'http://localhost:5000' + response["download_link"];
          console.log(a.href);
          // 对于文件名，需要进行Url解码
          a.download = decodeURI(response["filename"]);
          console.log(a.download);
          a.target = "_blank";
          a.click();
          // 移除a标签
          a.remove();
        }
      }
    };
    xhr.send();

  }
});