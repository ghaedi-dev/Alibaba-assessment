import { useEffect, useState, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Dashboard";
import API from "./utils/api";

const Country = lazy(() => import("./pages/Country"));
const Countries = lazy(() => import("./pages/Countries"));

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const { token, cancel } = API.source();

    (async function (cancelToken) {
      try {
        const { data } = await API.getAllCountries(cancelToken);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    })(token)

    return () => {
      cancel('Abort');
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Countries countries={state} />} />
          <Route path="countries/:country" element={<Country countries={state} />} />
          <Route path="*" element={<Countries countries={state} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
