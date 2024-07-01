export const checkToken = (tokenName) => {
  return !!localStorage.getItem(tokenName);
};
