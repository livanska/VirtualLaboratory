import React, { MutableRefObject } from "react";

import "./styles.scss";

interface Props {
  canvas: MutableRefObject<any>;
}

const WorkingArea = (props: Props) => {
  const { canvas } = props;

  return (
    <div className="workingArea">
      <div className="canvas" ref={canvas} />
    </div>
  );
};

export default WorkingArea;
