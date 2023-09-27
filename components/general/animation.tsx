"use client";
import React from "react";
import animationData from "../../public/robot1.json";
import animationLoading from "../../public/loading.json";
import Lottie from "lottie-react";
export const AnimationRobot = () => {
  return <Lottie animationData={animationData} loop={true} />;
};
export const AnimationLoading = () => {
  return (
    <Lottie
      animationData={animationLoading}
      loop={true}
      style={{ height: 300, marginTop: 200 }}
    />
  );
};
