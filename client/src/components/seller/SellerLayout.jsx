import SideNav from "./SideNav";
import TopNav from "./TopNav";

const SellerLayout = (props) => {
  return (
    <div className="px-0 container-fluid">
      <TopNav />
      <div className="row">
        <div className="w-20 d-none d-md-block">
          <SideNav />

        </div>
        <div className="w-80">
          <div >
            {props.children}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SellerLayout;