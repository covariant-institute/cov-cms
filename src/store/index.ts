function getAuth() {
  const TOKEN_KEY = 'token';
  
  let token = localStorage.getItem(TOKEN_KEY);

  return {
    get isLogin() {
      return token !== null;
    },

    login() {
      token = 'test';
      localStorage.setItem(TOKEN_KEY, token);
    },

    logout() {
      token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  };
}

export const Store = {
  Auth: getAuth(),
};
