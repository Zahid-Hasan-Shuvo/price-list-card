import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <p className="decoration-0">
        <a href={route.path}>{route.name}</a>
      </p>
    </div>
  );
};

export default Link;
