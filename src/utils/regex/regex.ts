export const regex = {
  emailRegex: new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  passwordRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{5,}$/,
  minLengthRegex: /.{5,}/,
  lowercaseRegex: /(?=.*[a-z])/,
  uppercaseRegex: /(?=.*[A-Z])/,
  numberRegex: /(?=.*[0-9])/,
  specialCharRegex: /(?=.*[!@#$%^&*()])/,
};
