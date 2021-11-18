// document.querySelector('body').style.cursor = 'url(https://upload.wikimedia.org/wikipedia/commons/b/b4/Samoyede_Nauka_2003-07_asb_PICT1895_small.JPG)';
// // 'url(/images/gownoTwoje.cur)'
// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     // use `url` here inside the callback because it's asynchronous!
// });

let ext = chrome.runtime.getURL("images/gownoTwoje.png");

// document.querySelector("*").style.cursor = `url("${ext}")`;

// console.log(ext);
// console.log(document.body.style.cursor);
document.body.style.cursor = "none";
let img = document.createElement("img");
img.src = ext;
img.style.height = "100px";
// img.width = "20px";
img.style.position = "fixed";
img.style.transform = "translate(-50%,-50%) rotate(-45deg)";
document.body.appendChild(img);
window.addEventListener("mousemove", (e) => {
	img.style.top = e.clientY + "px";
	img.style.left = e.clientX + "px";

	// console.log(e.clientX);
	// console.log();
});
