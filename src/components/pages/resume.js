import React from "react";
import "../../App.css";
import Pdf from "../../attachments/james_moseley_resume.pdf";

function resume() {
  return (
    <div>
      <a href={Pdf}> Download pdf</a>
    </div>
  );
}

export default resume;
