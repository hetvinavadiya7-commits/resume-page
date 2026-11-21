const copyEmailButton = document.querySelector("#copy-email");
const toast = document.querySelector("#toast");
const currentYear = document.querySelector("#current-year");
let toastTimeout;

currentYear.textContent = new Date().getFullYear();

copyEmailButton.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = "Email copied to clipboard.";
  } catch (error) {
    toast.textContent = `Copy unavailable. Email me at ${email}.`;
  }

  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
});
