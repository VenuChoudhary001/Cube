import axios from "axios";

export const validateEmail = (email) => {
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailReg.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegEx.test(phone);
};

export const postData = async (data) => {
  try {
    let res = await axios.post("/api/getintouch", {
      ...data,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
