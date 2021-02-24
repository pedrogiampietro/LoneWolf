import { TEAM_CREATE, TEAM_LIST } from '../actions/TeamActions';

const initialState = {
  team: null,
  teams: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TEAM_CREATE:
    case TEAM_LIST: {
      const response = payload ? payload.data : null;
      const team = response ? response.data : null;
      return { ...state, team };
    }

    default:
      return state;
  }
}
