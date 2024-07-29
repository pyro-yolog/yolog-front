import { DiaryContent, DiaryContentData } from '@/models/diary.model';

export const getImageList = ({ type, data }: DiaryContent) => {
  const REGEX = new RegExp('<img src="(?<src>\\S+)">', 'g');

  if (type === 'DEFAULT') {
    const result = [...(data as DiaryContentData).content.matchAll(REGEX)];

    return result
      .map((r) => r.groups?.src)
      .filter((s) => typeof s === 'string');
  } else {
    const result = (data as DiaryContentData[]).reduce(
      (arr: RegExpExecArray[], d) => [...arr, ...d.content.matchAll(REGEX)],
      [],
    );

    return result
      .map((r) => r.groups?.src)
      .filter((s) => typeof s === 'string');
  }
};

export const getPreviewContent = (
  { type, data }: DiaryContent,
  maxContent = 300,
) => {
  let content = '';
  if (type === 'DEFAULT') {
    content = (data as DiaryContentData).content
      .replaceAll(/<img src="(\S+)">/g, '')
      .replaceAll(/<(div|span|p|br)\/>/g, '')
      .replaceAll(/<\/(div|span|p|br)>/g, '')
      .replaceAll(/<(div|span|p|br)>/g, ' ');
  } else {
    content = (data as DiaryContentData[])
      .reduce((str, d) => `${str} ${d.content}`, '')
      .replaceAll(/<img src="(\S+)">/g, '')
      .replaceAll(/<(div|span|p|br)\/>/g, '')
      .replaceAll(/<\/(div|span|p|br)>/g, '')
      .replaceAll(/<(div|span|p|br)>/g, ' ');
  }

  if (content.length > maxContent) {
    return content.slice(0, maxContent) + '...';
  }

  return content;
};
