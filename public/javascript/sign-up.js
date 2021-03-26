function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    console.log('+++++++++++++');
    console.log('Username: '+ username);
    console.log('Password: '+ password);
  
    if (username && password) {
      const response = fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      // console.log('********** signUp :'+ json.str(response));
      //Check the reponse status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  document
    .querySelector(".sign-up")
    .addEventListener("submit", signupFormHandler);