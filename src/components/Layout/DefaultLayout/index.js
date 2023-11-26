import Header from "../components/Header";
import SideBar from "./SideBar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar></SideBar>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;