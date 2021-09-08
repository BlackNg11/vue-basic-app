export default {
  setUser(state, payload) {
    console.log(state);
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  }
};
