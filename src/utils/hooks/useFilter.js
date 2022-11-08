import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const EQUAL_SIGN = "=";
export const AND_SIGN = "&";

function parseUrl(url) {
  return url
    ?.replace("?", "")
    ?.split(AND_SIGN)
    ?.filter((v) => v)
    ?.reduce((acc, cur) => {
      const [key, value] = cur.split(EQUAL_SIGN);
      return { ...acc, [key]: value ? decodeURIComponent(value) : null };
    }, {});
}

function stringifyUrl(data) {
  if (data) {
    return Object.entries(data)
      ?.filter(([k, v]) => k && v)
      ?.reduce((acc, [key, val], idx) => {
        return `${acc}${idx === 0 ? "" : AND_SIGN
          }${key}${EQUAL_SIGN}${encodeURIComponent(val)}`;
      }, "?");
  }
}

function useFilter() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [filterState, setFilterState] = useState(parseUrl(search));

  useEffect(() => {
    navigate(stringifyUrl(filterState));
  }, [navigate, filterState]);

  const setState = (s) => {
    setFilterState(state => ({ ...state, ...s }));
  };

  return [filterState, setState];
}

export default useFilter;
