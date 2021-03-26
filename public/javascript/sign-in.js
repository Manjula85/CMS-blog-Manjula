function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //Check the reponse status
    if (response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".sign-in")
  .addEventListener("submit", signupFormHandler);
