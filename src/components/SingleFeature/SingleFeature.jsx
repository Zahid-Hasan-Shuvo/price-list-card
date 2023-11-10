import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleFeature = ({ feature }) => {
  return (
    <div>
   
      <div className="flex items-center pr-2">
      <FontAwesomeIcon className="mr-2" icon={faCircleCheck} />
        <p>{feature}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
