import Cookies from 'js-cookie';

const cookieEffect =
  <T>(key: string) =>
  ({ setSelf, onSet }: any) => {
    const token = Cookies.get(key);

    if (token !== undefined) {
      setSelf(JSON.parse(token) as T);
    }

    onSet((newValue: T) => {
      Cookies.set(key, JSON.stringify(newValue), { expires: 30 });
    });
  };

export default cookieEffect;
