import { FaSearch, FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import "./pages.scss";

function Home() {
  return (
    <div>
      <div className="carrier_div">
        <div className="min-carrier">
          <div className="intro">
            <h3>Google</h3>
          </div>
          <div className="carrier_inner">
            <div className="input-image">
              <div className="search">
                <FaSearch size={20} />
              </div>
              <div className="input">
                <input type="text" name="" id="" />
              </div>
              <div className="mic">
                <FaMicrophone size={20} />
                &nbsp;
                <SiGooglelens size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
