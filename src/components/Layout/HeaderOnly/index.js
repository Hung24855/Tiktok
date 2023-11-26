import Header from "../components/Header";

const HeaderOnly = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="content">{children}</div>
    </>
  );
};

export default HeaderOnly;
