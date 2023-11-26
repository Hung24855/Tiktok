//Layout
import HeaderOnly from "../components/Layout/HeaderOnly";

//Pages
import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Upload from "../Pages/Upload";
import Search from "../Pages/Search";

//Không cần login
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

//Cần login
const privateRoutes = [];

export { publicRoutes, privateRoutes };