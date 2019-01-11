export const emailValidate = values => {
  const errors = {};
  if (
    !values.email ||
    values.email.trim().length < 0 ||
    !values.email.includes("@")
  ) {
    errors.email = "Email is not valid";
  }
  return errors;
};

export const loginValidate = values => {
  const errors = {};
  if (
    !values.email ||
    values.email.trim().length < 0 ||
    !values.email.includes("@")
  ) {
    errors.email = "this field is required";
  }

  if (!values.password || values.password.trim().length < 8) {
    errors.password = "Password should be 8 symbols length";
  }

  return errors;
};

export const registerValidate = values => {
  const errors = {};
  if (
    !values.email ||
    values.email.trim().length < 0 ||
    !values.email.includes("@")
  ) {
    errors.email = "this field is required";
  }

  if (!values.password || values.password.trim().length < 8) {
    errors.password = "Password should be 8 symbols length";
  }
  if (!values.firstName || values.firstName.trim().length < 0) {
    errors.firstName = "Must by Name";
  }

  if (!values.lastName || values.lastName.trim().length < 0) {
    errors.lastName = "Must by Surname";
  }

  if (values.password !== values.repeatPassword) {
    errors.password = "Different password";
  }
  return errors;
};
