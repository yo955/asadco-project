import React from "react";
import { Logo } from "./Logo";
import { Text } from "./Text";
export const Hero = () => {
  return (
    <main className="grid grid-cols-6 mt-12 ">
      <Text className="bg-orange col-span-4 text-center p-1" />
      <Logo
        src="/logo/logo.png"
        className=" flex justify-center items-center w-[130%] h-[300%] bg-cover "
      />
      <div className="bg-primary "></div>
    </main>
  );
};
