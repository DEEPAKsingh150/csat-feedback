import axios from 'axios';
import { CsatPayload } from '../types/csat';

const API = axios.create({
  baseURL: 'https://example.com/api/v1',
});

export const submitCsat = async (payload: CsatPayload) => {
  const response = await API.post('/campaigns/submit-csat-response/', payload);
  return response.data;
};
