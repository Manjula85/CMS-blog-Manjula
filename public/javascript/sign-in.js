async function sign_inFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log('******** Username: ' + username);
  console.log('******** Password: ' + password);

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    //Check the reponse status
    console.log("***response: " + JSON.stringify(response));
    alert(JSON.stringify(response));

    if (response.ok) {
      document.location.replace("/");  //Or do we want to go straight to dashboard instead?
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".sign-in-form")
  .addEventListener("submit", sign_inFormHandler);
