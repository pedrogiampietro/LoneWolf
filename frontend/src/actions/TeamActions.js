import { apiGet, apiPost } from '../helpers/Api';

export const TEAM_LIST = 'TEAM_LIST';
export const TEAM_CREATE = 'TEAM_CREATE';

export const getTeamList = (data) => {
  const payload = apiGet('/team', data);
  return { type: TEAM_LIST, payload };
};

export const createNewTeam = (data) => {
  const payload = apiPost('/team/create', data);
  return { type: TEAM_CREATE, payload };
};
