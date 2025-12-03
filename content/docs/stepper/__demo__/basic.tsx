"use client";
import { useState } from "react";

import { Button, Stepper } from "@happect/ethereal-ui";

export default () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { STEP: 1, LABEL: "Verify Current Number" },
    { STEP: 2, LABEL: "Change Phone Number" },
    { STEP: 3, LABEL: "Verify New Number" },
  ];
  const incCurrentSteps = () => {
    if (currentStep < steps.length + 1) {
      setCurrentStep((crr) => crr + 1);
    }
  };
  const decCurrentSteps = () => {
    if (currentStep > 0) {
      setCurrentStep((crr) => crr - 1);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <Stepper currentStep={currentStep} steps={steps} />
      <div className="flex items-center gap-4">
        <Button onClick={decCurrentSteps}>PREVIOUS</Button>
        <Button onClick={incCurrentSteps}>NEXT</Button>
      </div>
    </div>
  );
};
