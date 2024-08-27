import { MemberResponse } from '@/models/member.model';
import axios from './config/instance';

const PREFIX = '/members';

export const getSocialTypeAPI = async () => {
  return (await axios.get<MemberResponse>(`${PREFIX}/social-type`)).data;
};
