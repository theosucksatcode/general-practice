function validateCredentials(username, password) {
  const usernameOk = username !== "" && !username.includes(" ");
  const passwordNoSpaces = !password.includes(" ");
  const passwordLongEnough = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  if (
    usernameOk &&
    passwordNoSpaces &&
    passwordLongEnough &&
    hasUppercase &&
    hasLowercase &&
    hasDigit
  ) {
    return "Access granted";
  } else {
    return "Invalid credentials";
  }
}

(function () {
  const attempts = [
    { username: "codecode92", password: "Tematie92" },
    { username: "devtree34", password: "short" },
    { username: "yurpyurp", password: "short 12345" },
    { username: "", password: "NoUsername1" },
    { username: "alllowercase", password: "alllowercase1" },
    { username: "nodigits", password: "NoDigitsHere" },
  ];

  attempts.forEach(({ username, password }) => {
    console.log(
      `${username || "(empty)"} -> ${validateCredentials(username, password)}`,
    );
  });
})();
