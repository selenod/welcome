import process from 'process';

export const googleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export const kakaoRestAPIKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
export const workspaceURL = process.env.REACT_APP_BUILD
  ? 'https://workspace.selenod.com'
  : 'http://localhost:3002';
export const serverURL = process.env.REACT_APP_BUILD
  ? 'https://api.selenod.com'
  : 'http://localhost:80';
