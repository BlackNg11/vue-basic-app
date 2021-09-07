export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;

    const isSomeCoach =
      coaches.length > 0 && coaches.some(coach => coach.id === userId);

    return isSomeCoach;
  }
};
