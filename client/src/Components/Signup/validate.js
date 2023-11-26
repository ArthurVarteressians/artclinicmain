const validate = (data) => {
  const errors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = "Username required!";
  } else {
    delete errors.name;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.email) {
    errors.email = "Email is required!";
  } else if (!emailPattern.test(data.email)) {
    errors.email = "Invalid email address!";
  } else {
    delete errors.email;
  }

  if (!data.age || data.age < 1 || data.age > 120) {
    errors.age = "Please enter coorect information!";
  } else {
    delete errors.age;
  }

  if (!data.phonenumber || !data.phonenumber.trim()) {
    errors.phonenumber = "Phone number required!";
  } else if (!/^\d{9,12}$/.test(data.phonenumber)) {
    errors.phonenumber = "Phone number must be a 9 to 12-digit number!";
  } else {
    delete errors.phonenumber;
  }

  if (!data.password) {
    errors.password = "Password is required!";
  } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(data.password)) {
    errors.password =
      "Password must be 6 characters or more and contain at least one uppercase letter, one lowercase letter, and one digit!";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match!";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Accept our regulations";
  }
  return errors;
};
export default validate;
