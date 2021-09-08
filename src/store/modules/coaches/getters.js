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
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;

    if (!lastFetch) {
      return true;
    }

    const currentTimesStamp = new Date().getTime();
    return (currentTimesStamp - lastFetch) / 1000 > 60;
  }
};
