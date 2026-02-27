import React from "react";

import { BorderMovingWrapper } from "@happect/ethereal-ui";

export default () => {
  return (
    <BorderMovingWrapper animationMode="loop">
      <div className="text-primary-text text-base w-2xl flex flex-col justify-center bg-background p-3">
        <h2>Moving Border</h2>
        <p>Content visible!</p>
        <button className="px-2 py-4">I am Moving Border</button>
      </div>
    </BorderMovingWrapper>
  );
};
