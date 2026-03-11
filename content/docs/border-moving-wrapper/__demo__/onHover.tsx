import React from "react";

import { BorderMovingWrapper } from "@q1k-oss/kiban";

export default () => {
  return (
    <BorderMovingWrapper trigger="hover" animationMode="loop">
      <div className="text-primary-text text-base max-w-[220px] flex flex-col justify-center bg-background p-3" >
        <h2>Moving Border</h2>
        <p>Content visible!</p>
        <button className="px-2 py-4">
          Hover on me!
        </button>
      </div>
    </BorderMovingWrapper>
  );
};