export default {
  requests(state, getters, rootState, rootGetter) {
    const coachId = rootGetter.userId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
