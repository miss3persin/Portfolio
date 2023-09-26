/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "../styles/Navbar.css";
import my_logo from "../assets/MY LOGO v2.png"
import HomeContent from "./HomeContent"
import ContactContent from "./ContactContent";
import ProfileContent from "./ProfileContent";
import PortfolioContent from "./PortfolioContent"
import SurpriseMe from "./SurpriseMe"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <div className="navbar">
        {/* Logo Icon */}
        <div
          className={`tab ${activeTab === "logo" ? "active" : ""} hoverable`}
          onClick={() => handleTabClick("logo")}
        >
          <div className="icon_image">
          <svg xmlns="http://www.w3.org/2000/svg" className="logo_image" width="250" height="240" viewBox="0 0 250 240">
  <g id="Group_18" data-name="Group 18" transform="translate(-800 -172)">
    <text id="M" transform="translate(840 342)" font-size="200" font-family="BEYNO-Test-Regular, BEYNO-Test"><tspan x="0" y="0" fill={activeTab === "logo" ? "#ffffff" : "#000000"}>M</tspan></text>
    <g id="Group_14" data-name="Group 14" transform="translate(20)">
      <line id="Line_10" data-name="Line 10" y2="73" transform="translate(796.5 172)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
      <line id="Line_12" data-name="Line 12" x1="107.5" transform="translate(780 188.5)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
    </g>
    <g id="Group_16" data-name="Group 16" transform="translate(800 313)">
      <line id="Line_10-2" data-name="Line 10" y1="73" transform="translate(16.5)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
      <line id="Line_12-2" data-name="Line 12" x1="107.5" transform="translate(0 56.5)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
    </g>
    <g id="Group_15" data-name="Group 15" transform="translate(942.5 172)">
      <line id="Line_10-3" data-name="Line 10" y2="73" transform="translate(91)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
      <line id="Line_12-3" data-name="Line 12" x2="107.5" transform="translate(0 16.5)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
    </g>
    <g id="Group_17" data-name="Group 17" transform="translate(942.5 313)">
      <line id="Line_10-4" data-name="Line 10" y1="73" transform="translate(91)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
      <line id="Line_12-4" data-name="Line 12" x2="107.5" transform="translate(0 56.5)" fill="none" stroke={activeTab === "logo" ? "#ffffff" : "#000000"} stroke-width="7"/>
    </g>
  </g>
</svg>


            <div className="nav-text"> <img src={my_logo} alt="miss3persin" /></div>
          </div>
        </div>

        {/* Home Icon */}
        <div
          className={`tab ${activeTab === "home" ? "active" : ""} hoverable`}
          onClick={() => handleTabClick("home")}
        >
          <div className="icon_image">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="img image_home"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                fill={activeTab === "home" ? "#ffffff" : "#000000"}
              ></path>{" "}
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                fill={activeTab === "home" ? "#ffffff" : "#000000"}
              ></path>{" "}
            </svg>
        

            <div className="nav-text"><p>HOME</p></div>
            
          </div>
        </div>

        {/* Profile Icon */}
        <div
          className={`tab ${activeTab === "profile" ? "active" : ""} hoverable`}
          onClick={() => handleTabClick("profile")}
        >
          <div className="icon_image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42.486"
              height="46.324"
              viewBox="0 0 42.486 46.324"
            >
              <g transform="translate(1.506 1.5)">
                <path
                  d="M167.749,58.408c.425,5.732,4.771,10.408,9.541,10.408s9.124-4.675,9.541-10.408a9.577,9.577,0,1,0-19.082,0Z"
                  transform="translate(-157.552 -48)"
                  fill="none"
                  stroke={activeTab === "profile" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  d="M83.736,304c8.943,0,18.02,5.2,19.7,15.027a1.807,1.807,0,0,1-1.608,2.32H65.644a1.807,1.807,0,0,1-1.609-2.32C65.716,309.2,74.792,304,83.736,304Z"
                  transform="translate(-63.998 -278.023)"
                  fill="none"
                  stroke={activeTab === "profile" ? "#ffffff" : "#000000"}
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
              </g>
            </svg>
            <div className="nav-text"><p>ABOUT ME</p></div>
          </div>
        </div>

        {/* Portfolio Icon */}
        <div
          className={`tab ${
            activeTab === "portfolio" ? "active" : ""
          } hoverable`}
          onClick={() => handleTabClick("portfolio")}
        >
          <div className="icon_image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42.002"
              height="53.702"
              viewBox="0 0 42.002 53.702"
            >
              <g transform="translate(1.5 1.5)">
                <path
                  d="M135,69.116V92.852a5.85,5.85,0,0,1-5.85,5.85h-27.3A5.85,5.85,0,0,1,96,92.852v-39A5.85,5.85,0,0,1,101.85,48h12.036a3.9,3.9,0,0,1,2.757,1.142L133.86,66.359A3.9,3.9,0,0,1,135,69.116Z"
                  transform="translate(-96 -48)"
                  fill="none"
                  stroke={activeTab === "portfolio" ? "#ffffff" : "#000000"}
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  d="M185.75,56V70.626a3.9,3.9,0,0,0,3.9,3.9h14.626M176,84.276h19.5M176,94.027h19.5"
                  transform="translate(-166.25 -55.025)"
                  fill="none"
                  stroke={activeTab === "portfolio" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
            <div className="nav-text"><p>PORTFOLIO</p></div>
          </div>
        </div>

        {/* Contact Icon */}
        <div
          className={`tab ${activeTab === "contact" ? "active" : ""} hoverable`}
          onClick={() => handleTabClick("contact")}
        >
          <div className="icon_image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="img image_contact"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                fill={activeTab === "contact" ? "#ffffff" : "#000000"}
              ></path>{" "}
            </svg>
            <div className="nav-text"><p>CONTACT ME</p></div>
          </div>
        </div>

        {/* Surprise Icon */}
        <div
          className={`tab ${
            activeTab === "surprise" ? "active" : ""
          } hoverable`}
          onClick={() => handleTabClick("surprise")}
        >
          <div className="icon_image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.744"
              height="43.939"
              viewBox="0 0 41.744 43.939"
            >
              <g transform="translate(790.5 -44.818)">
                <line
                  x2="9.057"
                  transform="translate(-759.313 67.634)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x1="9.057"
                  transform="translate(-789 67.954)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x2="9.057"
                  transform="translate(-762.012 75.501) rotate(45)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x2="9.057"
                  transform="translate(-778.25 60.087) rotate(-135)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x2="9.057"
                  transform="translate(-769.88 78.2) rotate(90)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x2="9.057"
                  transform="translate(-770.383 55.375) rotate(-90)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x2="9.057"
                  transform="translate(-762.516 60.087) rotate(-45)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  x2="9.057"
                  transform="translate(-778.25 75.821) rotate(135)"
                  fill="none"
                  stroke={activeTab === "surprise" ? "#ffffff" : "#000000"}
                  stroke-linecap="round"
                  stroke-width="3"
                />
              </g>
            </svg>
            <div className="nav-text"><p>SURPRISE ME</p></div>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Content for the active tab goes here */}
        {activeTab === "logo" && <div>Logo</div>}
        {activeTab === "home" && <div data-aos="fade-left"><HomeContent/></div>}
        {activeTab === "profile" && <div data-aos="fade-left"><ProfileContent/></div>}
        {activeTab === "portfolio" && <div data-aos="fade-left"><PortfolioContent/></div>}
        {activeTab === "contact" && <div data-aos="fade-left"><ContactContent/></div>}
        {activeTab === "surprise" && <div><SurpriseMe/></div>}
      </div>
    </div>
  );
};

export default Navbar;
