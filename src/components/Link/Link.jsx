import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <p className="decoration-0 hover:bg-slate-500">
        <a href={route.path}>{route.name}</a>
      </p>
    </div>
  );
};

export default Link;
