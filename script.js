const fullNameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const githubInput = document.getElementById("github-input");

const fullNameErr = document.getElementById("name-error-span");
const emailErr = document.getElementById("email-error-span");
const githubErr = document.getElementById("github-error-span");

const checkBtn = document.getElementById("generate-btn");

checkBtn.addEventListener("click", () => {
  const fullName = fullNameInput.value.trim();
  if (fullName === "") {
    fullNameErr.style.display = "flex";
  }

  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    emailErr.style.display = "flex";
  }

  const githubUsername = githubInput.value.trim();
  const githubRegex = /^[a-zA-Z0-9-]{1,39}$/;
  if (!githubRegex.test(githubUsername)) {
    githubErr.style.display = "flex";
  }

  console.log("All inputs are valid!");
});
