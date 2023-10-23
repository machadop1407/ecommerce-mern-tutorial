import { useCookies } from "react-cookie";
export const useGetToken = () => {
  const [cookies, _] = useCookies(["access_token"]);

  return {
    headers: { authorization: cookies.access_token },
  };
};
