const directoryIcon = `<svg t="1702200435680" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1172" 0><path d="M850.269659 339.668293V236.868683c0-49.251902-25.674927-74.926829-74.92683-74.926829H661.853659c-36.46439 2.097951-66.33522 14.985366-87.814244 38.562341-21.379122 21.379122-40.760195 40.760195-55.645659 57.843512-17.083317 19.181268-44.956098 30.070634-79.222634 32.168586H141.561756c-12.787512 0-21.379122 0-30.070634 4.295805h-6.393756c-2.097951 2.097951-4.295805 2.097951-4.295805 4.295804-21.379122 8.59161-32.168585 25.674927-34.266537 51.349854 0 2.097951 0 6.393756-2.097951 8.59161v336.171707c2.097951 12.787512 4.295805 23.576976 8.59161 34.266537 4.295805 8.59161 10.689561 17.083317 21.379122 23.477073 8.59161 6.393756 19.381073 8.59161 30.070634 6.393756 2.097951-4.295805 2.097951-10.689561 2.097951-17.083317V408.301268c0-2.097951 0-6.393756 2.097951-8.591609 2.097951-21.379122 8.59161-36.46439 21.379122-44.956098l4.295805-4.295805c10.689561-6.393756 25.774829-10.689561 44.956098-10.689561h650.964293v-0.099902z m75.026731 55.645658c21.379122 10.689561 34.266537 32.168585 34.266537 62.039415V789.229268c-2.097951 49.251902-25.774829 72.728976-74.926829 72.728976H250.755122c-34.266537 0-57.843512-12.787512-66.33522-36.46439-6.393756-8.59161-8.59161-21.379122-8.591609-34.266537V457.553171c0-2.097951 0-6.393756 2.097951-8.59161 2.097951-40.760195 27.772878-59.941463 72.728976-59.941463h633.880975c17.083317-0.099902 30.070634 1.998049 40.760195 6.293853z" p-id="1173"></path></svg>`;
const fileIcon = `<svg t="1702201305411" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1591" 0><path d="M578.3 338.3c-27-11.8-10.6-216.7-14.3-274.3H258.6c-44.2 0-80.1 35.9-80.1 80v736c0 44.2 35.9 80 80.1 80h506.8c44.2 0 80.1-35.9 80.1-80V352.1c-3.8-11.7-239.8 2.6-267.2-13.8z m-257.4 97.6h377.7c18.6 0 33.8 15.1 33.8 33.8 0 18.7-15.1 27.1-33.8 27.1H320.9c-18.6 0-33.8-8.5-33.8-27.1 0-18.7 15.2-33.8 33.8-33.8z m207.7 317.6h-209c-20 0-36.2-16.2-36.2-36.2 0-20 16.2-29.6 36.2-29.6h208.8c20 0 36.2 9.6 36.2 29.6 0.2 20-16 36.2-36 36.2z m171.3-123.8h-379c-20 0-36.2-16.2-36.2-36.2s16.2-29.6 36.2-29.6h379c20 0 36.2 9.6 36.2 29.6s-16.2 36.2-36.2 36.2z m143.9-314.6l-216.5 1.6-23.2-17v-235l239.7 250.4z" p-id="1592"></path></svg>`;
const deleteIcon = `<svg t="1702439139842" class="deleteIcon" id="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1321" 0><path d="M848 214.464a12.8 12.8 0 0 1 0 18.08L568.608 512l279.456 279.456a12.8 12.8 0 0 1 1.6 16.096l-1.6 1.984-38.496 38.496a12.8 12.8 0 0 1-18.08 0L512 568.576 232.544 848a12.8 12.8 0 0 1-16.096 1.6l-1.984-1.6-38.496-38.496a12.8 12.8 0 0 1 0-18.08L455.424 512 176 232.544a12.8 12.8 0 0 1-1.6-16.096l1.6-1.984 38.496-38.496a12.8 12.8 0 0 1 18.08 0L512 455.424 791.456 176a12.8 12.8 0 0 1 16.096-1.6l1.984 1.6z" p-id="1322"></path></svg>`

const sendBtn = document.querySelector("#sendBtn");
const receiveBtn = document.querySelector("#receiveBtn");
const sendBox = document.querySelector(".sendBox");
const receiveBox = document.querySelector(".receiveBox");
const solidLine = document.querySelector(".solidLine");
const sendInfo = document.querySelector(".sendInfo");
const filesBox = document.querySelector(".filesBox");

//当鼠标点击接收按钮时，发送框隐藏，接收框显示
receiveBtn.addEventListener("click", () => {
  sendBox.style.display = "none";
  receiveBox.style.display = "block";
  sendBtn.classList.remove("selectTextColor");
  receiveBtn.classList.add("selectTextColor");
  solidLine.classList.add("solidLineMove");
  // sendInfo.style.display = "none";
  // filesBox.classList.remove("filesBoxEnable")
  // filesBox.classList.add("filesBoxDisable");
});

//当鼠标点击发送按钮时，接收框隐藏，发送框显示
sendBtn.addEventListener("click", () => {
  receiveBox.style.display = "none";
  sendBox.style.display = "flex";
  receiveBtn.classList.remove("selectTextColor");
  sendBtn.classList.add("selectTextColor");
  solidLine.classList.remove("solidLineMove");
  // sendInfo.style.display = "flex";
  // filesBox.classList.remove("filesBoxDisable");
  // filesBox.classList.add("filesBoxEnable");
});

const sendFilesList = document.querySelector(".sendFilesList");
const fileUpload = document.querySelector(".fileUpload");
const directoryUpload = document.querySelector(".directoryUpload");

const fileInput = document.querySelector("#fileInput");
const directoryInput = document.querySelector("#directoryInput");
const sendFilesInfo = document.querySelector("#sendFilesInfo");

//文件总大小
let allSumSize = 0;

//文件信息，用于删除文件
let summmaryInfo = {
  itemSum: 0,
};

//传输码信息，用于接收文件
let transferCode = "";

//创建formData对象，用于存储上传的文件
let formData = new FormData();

//显示上传文件的总大小
function transformFilesSumSize(filesSumSize) {
  //判断filesSumSize是否大于0，如果小于0，则置为0
  if (filesSumSize < 0) {
    filesSumSize = 0;
  }
  if (filesSumSize > 1024 * 1024 * 1024) {
    filesSumSize = (filesSumSize / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  } else if (filesSumSize > 1024 * 1024) {
    filesSumSize = (filesSumSize / (1024 * 1024)).toFixed(2) + "MB";
  } else if (filesSumSize > 1024) {
    filesSumSize = (filesSumSize / 1024).toFixed(2) + "KB";
  } else {
    filesSumSize = filesSumSize + "B";
  }
  // console.log(filesSumSize);
  return filesSumSize;
}

//定时器实时检测sendFilesList有无内容，如果有内容，则显示filesBox，否则隐藏filesBox
setInterval(() => {
  if (receiveBox.style.display != "block") {
    if (sendFilesList.children.length > 0) {
      filesBox.classList.remove("filesBoxDisable");
      filesBox.classList.add("filesBoxEnable");
    } else {
      filesBox.classList.remove("filesBoxEnable");
      filesBox.classList.add("filesBoxDisable");
    }
  } else {
    filesBox.classList.remove("filesBoxEnable");
    filesBox.classList.add("filesBoxDisable");
  }

}, 10);


fileUpload.addEventListener("click", () => {
  fileInput.click();
});

//当鼠标点击文件上传按钮时，文件选择框弹出，并将选择的文件显示在sendFilesList中
fileInput.addEventListener("change", () => {
  //如果用户没有选择文件，则退出函数
  if (fileInput.files.length == 0) {
    return;
  }

  //打印调试信息formData
  for (var value of formData.values()) {
    console.log("formData", value);
  }

  let files = fileInput.files;
  // console.log(files);
  //在summaryInfo的基础上，遍历filesInfo,如果文件夹已经存在，则不再添加
  if (summmaryInfo.itemSum != 0) {
    for (let i = 1; i < summmaryInfo.itemSum; i++) {
      if (summmaryInfo["itemID_" + i].name == files[0].name) {
        console.log("文件已存在");
        return;
      }
    }
  }
  for (let i = 0; i < files.length; i++) {
    allSumSize += files[i].size;
    summmaryInfo.itemSum++;

    //创建文件信息
    const itemID = "itemID_" + summmaryInfo.itemSum;

    //添加文件信息到summaryInfo中
    summmaryInfo[itemID] = {
      name: files[i].name,
      size: files[i].size,
      type: files[i].type,
    };

    sendFilesList.innerHTML += `<p>${fileIcon}<span>${files[i].name}</span><svg t="1702439139842" class="deleteIcon" id="${itemID}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1321" 0><path d="M848 214.464a12.8 12.8 0 0 1 0 18.08L568.608 512l279.456 279.456a12.8 12.8 0 0 1 1.6 16.096l-1.6 1.984-38.496 38.496a12.8 12.8 0 0 1-18.08 0L512 568.576 232.544 848a12.8 12.8 0 0 1-16.096 1.6l-1.984-1.6-38.496-38.496a12.8 12.8 0 0 1 0-18.08L455.424 512 176 232.544a12.8 12.8 0 0 1-1.6-16.096l1.6-1.984 38.496-38.496a12.8 12.8 0 0 1 18.08 0L512 455.424 791.456 176a12.8 12.8 0 0 1 16.096-1.6l1.984 1.6z" p-id="1322"></path></svg></p>`;
    // console.log(transformFilesSumSize(filesSumSize));
    sendFilesInfo.innerHTML = `文件大小共计：${transformFilesSumSize(allSumSize)}`;

    //判断文件数量，如果文件数量大于1，则压缩成一个zip文件，否则直接添加到formData中
    if (files.length > 1) {
      // 将files压缩成zip文件
      const zip = new JSZip();
      for (let i = 0; i < files.length; i++) {
        // console.log(files[i].name);
        zip.file(files[i].name, files[i]);
      }
      zip.generateAsync({
        type: "blob"
      }).then(function (content) {
        // console.log(content);
        //将压缩后的文件添加到formData中
        formData.append("files", content, "files.zip");
      });
    } else {
      //将用户选择的文件添加到formData中
      formData.append("files", files[0], files[0].webkitRelativePath || files[0].name);
    }
  }
  //写入完成后清空fileInput
  // fileInput.value = "";
});

directoryUpload.addEventListener("click", () => {
  directoryInput.click();
});

directoryInput.addEventListener("change", () => {
  //如果用户没有选择文件夹，则退出函数
  if (directoryInput.files.length == 0) {
    return;
  }
  const files = directoryInput.files;

  let filesSumSize = 0;
  //文件夹中的文件总大小
  for (let i = 0; i < files.length; i++) {
    filesSumSize += files[i].size;
  }
  // console.log(filesSumSize);
  // 获取第一个文件的webkitRelativePath
  const firstFileRelativePath = files[0].webkitRelativePath;
  // console.log(firstFileRelativePath);
  // 从webkitRelativePath中提取文件夹名
  const folderName = firstFileRelativePath.split("/")[0];
  // console.log(folderName);
  //在summaryInfo的基础上，遍历filesInfo,如果文件夹已经存在，则不再添加
  if (summmaryInfo.itemSum != 0) {
    for (let i = 1; i < summmaryInfo.itemSum; i++) {
      if (summmaryInfo["itemID_" + i].name == folderName) {
        console.log("文件夹已存在");
        return;
      }
    }
  }
  allSumSize += filesSumSize;
  summmaryInfo.itemSum++;

  //创建文件信息
  const itemID = "itemID_" + summmaryInfo.itemSum;

  //写入文件信息
  summmaryInfo[itemID] = {
    name: folderName,
    size: filesSumSize,
    type: "folder",
    files: files,
  };

  sendFilesList.innerHTML += `<p>${directoryIcon}<span>${folderName}</span><svg t="1702439139842" class="deleteIcon" id="${itemID}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1321" 0><path d="M848 214.464a12.8 12.8 0 0 1 0 18.08L568.608 512l279.456 279.456a12.8 12.8 0 0 1 1.6 16.096l-1.6 1.984-38.496 38.496a12.8 12.8 0 0 1-18.08 0L512 568.576 232.544 848a12.8 12.8 0 0 1-16.096 1.6l-1.984-1.6-38.496-38.496a12.8 12.8 0 0 1 0-18.08L455.424 512 176 232.544a12.8 12.8 0 0 1-1.6-16.096l1.6-1.984 38.496-38.496a12.8 12.8 0 0 1 18.08 0L512 455.424 791.456 176a12.8 12.8 0 0 1 16.096-1.6l1.984 1.6z" p-id="1322"></path></svg></p>`;
  // console.log(transformFilesSumSize(filesSumSize));
  sendFilesInfo.innerHTML = `文件大小共计：${transformFilesSumSize(allSumSize)}`;

  // 将files压缩成zip文件
  const zip = new JSZip();
  for (let i = 0; i < files.length; i++) {
    zip.file(files[i].webkitRelativePath, files[i]);
  }
  zip.generateAsync({
    type: "blob"
  }).then(function (content) {
    console.log(content);
    //将压缩后的文件添加到formData中
    formData.append("files", content, "files.zip");
  });


  //写入完成后清空directoryInput
  directoryInput.value = "";

});


//使用事件委托，监听sendFilesList，当鼠标点击删除按钮时，删除该文件,并将文件总大小减去该文件的大小
sendFilesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteIcon")) {
    const itemID = e.target.id;
    // console.log(itemID);
    const item = document.querySelector(`#${itemID}`);
    // console.log(item);
    const itemSize = summmaryInfo[itemID].size;
    // console.log(itemSize);
    item.parentNode.remove();
    //清空input的value
    fileInput.value = "";
    allSumSize -= itemSize;
    summmaryInfo.itemSum--;
    //修改summmaryInfo中的文件（夹）总个数和文件（夹）总大小
    summmaryInfo["itemID_" + summmaryInfo.itemSum].size = allSumSize;
    //删除summmaryInfo中的该文件（夹）信息
    delete summmaryInfo[itemID];

    // 获取删除的文件（夹）的名称，用于删除formData中的文件
    const itemName = summmaryInfo[itemID].name;
    formData.delete("file", itemName);

    // console.log(transformFilesSumSize(filesSumSize));
    sendFilesInfo.innerHTML = `文件大小共计：${transformFilesSumSize(allSumSize)}`;

    //当用户删除了所有文件后，给下面的codeInfo添加codeInfoDisable类
    if (summmaryInfo.itemSum == 0) {
      codeInfo.classList.remove("codeInfoEnable");
      codeInfo.classList.add("codeInfoDisable");
    }
  }
});



//当用户点击confirmUploadBtn时，提交form表单
const confirmUploadBtn = document.querySelector("#confirmUploadBtn");
confirmUploadBtn.addEventListener("click", () => {
  //检测formData是否为空，如果为空，则退出函数
  if (formData.get("files") == null) {
    console.log("formData为空");
    return;
  }

  // 使用 Fetch API 进行文件上传
  // fetch('http://localhost:5000/upload', {
  //   method: 'POST',
  //   body: formData,
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("上传成功:", data);
  //     //保存传输码
  //     transferCode = data["transferCode"];
  //     console.log("transferCode:", transferCode);
  //     confirmUploadBtn.classList.add("continueUpload")
  //   })
  //   .catch(error => {
  //     console.error('错误:', error);
  //   });
  // 创建一个XHR对象
  const xhr = new XMLHttpRequest();

  // 设置XHR的onprogress事件处理程序
  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      // 上传进度为2位小数的百分比
      const percentComplete = ((event.loaded / event.total) * 100).toFixed(2);
      console.log(`上传进度: ${percentComplete}%`);

      const progress = document.querySelector(".progress");

      progress.innerText = `上传进度: ${percentComplete}%`;
      //当上传进度为100%时，设置progress为display:none
      if (percentComplete == 100) {
        progress.style.display = "none";
      }

    }
  };

  // 设置XHR的其他事件处理程序
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('上传成功:', xhr.responseText);
      //将返回的数据转换为json格式
      const data = JSON.parse(xhr.responseText);
      //保存传输码
      transferCode = data["transferCode"];
      console.log("transferCode:", transferCode);
      confirmUploadBtn.classList.add("continueUpload")
    } else {
      console.error('上传失败:', xhr.statusText);
      // 在这里处理失败的逻辑
    }
  };

  xhr.onerror = function () {
    console.error('发生错误');
  };

  // 打开连接并发送数据
  xhr.open('POST', 'http://localhost:5000/upload', true);
  xhr.send(formData);
});





//定时器检测continueUpload是否存在
const checkContinueUpload = setInterval(() => {
  const continueUpload = document.querySelector(".continueUpload");
  if (continueUpload != null) {
    continueUpload.innerText = "继续上传";
    continueUpload.addEventListener("click", () => {
      //强制刷新页面
      window.location.reload();
    });
  }
}, 10);

const codeInfo = document.querySelector(".codeInfo");
const transferCodeContainer = document.querySelector("#transferCodeContainer");
// 定时器实时检测transferCode是否为空，如果不为空，则显示codeInfo
const checkCode = setInterval(() => {
  if (transferCode != "") {
    codeInfo.classList.remove("codeInfoDisable");
    transferCodeContainer.innerText = transferCode;
    clearInterval(checkCode);
  }
}, 10);

// 定时器实时检测transferCode是否为空，如果不为空，则关闭checkCode定时器
const checkTimer = setInterval(() => {
  if (transferCode != "") {
    clearInterval(checkCode);
  }
}, 10);




//当用户点击codeInfo的svg时，复制codeInfo内容的后六位到剪贴板，使用clipboard.js
const copyCode = document.querySelector("#copyCode");
const clipboard = new ClipboardJS('#copyCode', {
  text: function () {
    return codeInfo.innerText.slice(-6);
  }
}).on('success', function (e) {
  // console.log("复制成功");
  e.clearSelection();
}).on('error', function (e) {
  console.log("复制失败");
  e.clearSelection();
});


