import React from 'react';
import classNames from 'classnames';
// import { Link } from "react-scroll";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      {/* <ul className="list-reset">
        <li>
          <Link to="#0">Contact</Link>
        </li>
        <li>
          <Link to="whoweare" smooth={true} duration={500} style={{ cursor: "pointer" }}>About us</Link>
        </li>
        <li>
          <Link to="#0">FAQ's</Link>
        </li>
      </ul> */}
      <p>
        Chandigarh, INDIA
      </p>
    </nav>
  );
}

export default FooterNav;