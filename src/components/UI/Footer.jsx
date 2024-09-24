import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import FooterContent from "../../api/FooterContent.json";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const iconsMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {FooterContent.map((curData, index) => {
          const { icons, title, details } = curData;
          return (
            <>
              <div className="footer-contact" key={index}>
                <div className="icon">{iconsMap[icons]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink to=''>SHOBHIT SINGH</NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to=''>Home</NavLink>               
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>               
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>             
                </li>
                <li>
                  <NavLink to='/country'>Country</NavLink>               
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
