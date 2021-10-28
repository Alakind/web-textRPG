const selectAuthUser = ({ auth: { user } }) => user;

const selectAuthIsAuthenticated = ({ auth: { isAuthenticated } }) => isAuthenticated;

export const authSelectors = {
  selectAuthUser,
  selectAuthIsAuthenticated,
};
