"use client";
import { useState } from "react";

import { Button, Stepper } from "@happect/ethereal-ui";

const STEP_STATUS = {
  PENDING: "pending",
  ON_GOING: "on_going",
  COMPLETED: "completed",
};

export default function StepperDemo() {
  const [steps, setSteps] = useState([
    { LABEL: "Verify Current Number", STATUS: STEP_STATUS.ON_GOING }, // FIX 🔥
    { LABEL: "Change Phone Number", STATUS: STEP_STATUS.PENDING },
    { LABEL: "Verify New Number", STATUS: STEP_STATUS.PENDING },
  ]);

  let animLock = false; // keeps animation in sync

  const nextStep = () => {
    if (animLock) return;
    animLock = true;

    const idx = steps.findIndex((s) => s.STATUS === STEP_STATUS.ON_GOING);

    if (idx === -1 || idx === steps.length) return;

    // mark active as completed
    setSteps((prev) => {
      const copy = [...prev];
      copy[idx].STATUS = STEP_STATUS.COMPLETED;
      return copy;
    });
    if (idx === steps.length - 1) return;
    // after animation → activate next
    setTimeout(() => {
      setSteps((prev) => {
        const copy = [...prev];
        copy[idx + 1].STATUS = STEP_STATUS.ON_GOING;
        return copy;
      });
      animLock = false;
    }, 1000);
  };

  const prevStep = () => {
    if (animLock) return;
    animLock = true;

    const idx = steps.findIndex((s) => s.STATUS === STEP_STATUS.ON_GOING);
    if (idx <= 0) return;

    // revert current to pending
    setSteps((prev) => {
      const copy = [...prev];
      copy[idx].STATUS = STEP_STATUS.PENDING;
      return copy;
    });

    // after animation → previous active
    setTimeout(() => {
      setSteps((prev) => {
        const copy = [...prev];
        copy[idx - 1].STATUS = STEP_STATUS.ON_GOING;

        // clean next steps if user goes backward
        for (let i = idx; i < copy.length; i++)
          copy[i].STATUS = STEP_STATUS.PENDING;

        return copy;
      });
      animLock = false;
    }, 600);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <Stepper steps={steps} />

      <div className="flex items-center gap-4">
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  );
}
