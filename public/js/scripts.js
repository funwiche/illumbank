const api = "https://extranet-apis.onrender.com";
const contactForm = document.querySelector("#contact-form");
const searchForm = document.querySelector("#search-form");
const loanForm = document.querySelector("#appointment-form");
loanForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loader = e.target.querySelector(".loader");
  const data = Object.fromEntries(
    Array.from(e.target.querySelectorAll(".wpcf7-form-control")).map((elt) => [
      elt.getAttribute("name"),
      elt.value,
    ])
  );
  loader.classList.remove("hidden");
  axios
    .post(api + "/accounts/mailer/appointment", data)
    .then((res) => {
      loanForm.reset();
      document.querySelector("#success-alert").classList.remove("hidden");
    })
    .catch((error) => {
      document.querySelector("#error-alert").classList.remove("hidden");
    })
    .finally(() => {
      loader.classList.add("hidden");
      setTimeout(() => {
        document.querySelector("#error-alert").classList.add("hidden");
        document.querySelector("#success-alert").classList.add("hidden");
      }, 5000);
    });
});
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loader = e.target.querySelector(".loader");
  const data = Object.fromEntries(
    Array.from(e.target.querySelectorAll(".wpcf7-form-control")).map((elt) => [
      elt.getAttribute("name"),
      elt.value,
    ])
  );
  loader.classList.remove("hidden");
  axios
    .post(api + "/accounts/mailer", data)
    .then((res) => {
      contactForm.reset();
      document.querySelector("#success-alert").classList.remove("hidden");
    })
    .catch((error) => {
      document.querySelector("#error-alert").classList.remove("hidden");
    })
    .finally(() => {
      loader.classList.add("hidden");
      setTimeout(() => {
        document.querySelector("#error-alert").classList.add("hidden");
        document.querySelector("#success-alert").classList.add("hidden");
      }, 5000);
    });
});
