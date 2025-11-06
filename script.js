// Get elements
const form = document.getElementById("coding-form");

const fullNameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const githubInput = document.getElementById("github-input");

const fullNameErr = document.getElementById("name-error-span");
const emailErr = document.getElementById("email-error-span");
const githubErr = document.getElementById("github-error-span");

const checkBtn = document.getElementById("generate-btn");

const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const preview = document.getElementById("preview");
const uploadText = document.getElementById("upload-text");
const cloudIcon = document.getElementById("cloud-icon");
const changeBtn = document.getElementById("change-btn");
const removeBtn = document.getElementById("remove-btn");

let congratsName = document.getElementById("congrats-name");
let congratsEmail = document.getElementById("congrats-email");
let congratsGithub = document.getElementById("congrats-github");

let ticketID = document.getElementById("ticket-id");

const fileSizeInfo = document.getElementById("file-size-info");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.style.backgroundColor = "hsla(245, 19%, 35%, 0.8)";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.style.backgroundColor = "hsla(245, 19%, 35%, 0.6)";
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];

  if (file && file.type.startsWith("image")) {
    handleImageUpload(file);
  }
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image")) {
    handleImageUpload(file);
  }
});

function handleImageUpload(file) {
  var fileLimit = 500;
  var fileSize = file.size;
  var fileSizeKB = fileSize / 1024;
  if (fileSizeKB > fileLimit) {
    fileSizeInfo.innerText = "File too large, upload a file smaller than 500KB";
    fileSizeInfo.style.color = "red";
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.innerHTML = `<img src="${e.target.result}" alt="Preview" id="image-preview" />`;
  };
  reader.readAsDataURL(file);

  uploadText.style.display = "none";
  cloudIcon.style.display = "none";

  changeBtn.style.display = "inline-block";
  removeBtn.style.display = "inline-block";
}

changeBtn.addEventListener("click", () => {
  fileInput.click();
});

removeBtn.addEventListener("click", () => {
  preview.innerHTML = "";
  uploadText.style.display = "block";
  cloudIcon.style.display = "block";
  changeBtn.style.display = "none";
  removeBtn.style.display = "none";

  fileInput.value = "";
});

checkBtn.addEventListener("click", () => {
  const fullName = fullNameInput.value.trim();
  if (fullName === "" || fullName.length < 3) {
    fullNameErr.style.display = "flex";
  }

  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailErr.style.display = "flex";
  }

  const githubUsername = githubInput.value.trim();
  const githubRegex = /^@[a-zA-Z0-9_-]{1,39}$/;
  if (!githubRegex.test(githubUsername)) {
    githubErr.style.display = "flex";
  }

  if (
    fullNameErr.style.display === "flex" ||
    emailErr.style.display === "flex" ||
    githubErr.style.display === "flex"
  ) {
    return;
  } else {
    document.getElementById("coding-form").style.display = "none";
    document.getElementById("generated-ticket").style.display = "flex";
    document.getElementById("form-header").style.display = "none";

    congratsName.innerText = fullName;
    congratsEmail.innerText = email;
    congratsGithub.innerText = githubUsername;

    ticketID.innerText = "#" + Math.floor(Math.random() * 99999);
  }
});
