const fullNameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const githubInput = document.getElementById("github-input");

const fullNameErr = document.getElementById("name-error-span");
const emailErr = document.getElementById("email-error-span");
const githubErr = document.getElementById("github-error-span");

const checkBtn = document.getElementById("generate-btn");

const dropZone = document.getElementById("drop-zone");

let congratsName = document.getElementById("congrats-name");
let congratsEmail = document.getElementById("congrats-email");
let congratsGithub = document.getElementById("congrats-github");

/*
dropZone.addEventListener("drop", dropHandler);

window.addEventListener("drop", (e) => {
  if ([...e.dataTransfer.items].some((item) => item.kind === "file")) {
    e.preventDefault();
  }
});

dropZone.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file"
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (fileItems.some((item) => item.type.startsWith("image/"))) {
      e.dataTransfer.dropEffect = "copy";
    } else {
      e.dataTransfer.dropEffect = "none";
    }
  }
});

window.addEventListener("dragover", (e) => {
  const fileItems = [...e.dataTransfer.items].filter(
    (item) => item.kind === "file"
  );
  if (fileItems.length > 0) {
    e.preventDefault();
    if (!dropZone.contains(e.target)) {
      e.dataTransfer.dropEffect = "none";
    }
  }
});
 
  Temporarily TODO ^ 
  
  */

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
  }
});
