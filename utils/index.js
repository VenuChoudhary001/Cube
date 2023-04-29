export const validateEmail = (email) => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailReg.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegEx.test(phone);
};
