import { Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Newsletter from "./screens/Newsletter";
import Photography from "./screens/Photography";

const Router = (props) => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/newsletter"} element={<Newsletter />} />
      <Route path={"/photography"} element={<Photography />} />
      <Route path={"/miscellaneous"} element={<HomePage />} />
    </Routes>
  );
};

export default Router;
