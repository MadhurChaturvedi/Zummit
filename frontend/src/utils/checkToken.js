export const checkToken = (tokenName) => {
  return !!localStorage.get(tokenName);
};
