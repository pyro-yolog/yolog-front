import axios from './config/instance';

const PREFIX = '/diaries';

export const getDiaryListByDateAPI = async (
  tripId: string | number,
  date: string,
) => {
  return (await axios.get<DiaryResponse[]>(`${PREFIX}/${tripId}/days/${date}`))
    .data;
};
