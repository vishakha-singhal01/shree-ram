import React from "react";
import { Link } from "react-router-dom";

const DesktopNavbar = ({ links = [] }) => {
  return (
    <div className="h-20 flex gap-10 justify-end items-end px-7 pb-2">
      {links.map((link) => {
        const { name, url } = link;
        return (
          <Link
            key={name}
            to={url}
            className="font-bold text-3xl text-white hover:border-b-2 hover:border-white"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopNavbar;