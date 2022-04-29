// export const validatePhone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
export const validatePhone = /^\d{10}$/;
export const validatePassword = (value: string) => {
  if (value.includes(" ")) {
    return false;
  }
  if (value.length < 8) {
    return false;
  }
  return true;
};
