var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("botton.html");

document.body.insertBefore (iFrame, document.body.firstChild);