import React from "react";
import { SecondaryButton } from "./Buttons";

const EmptyList = ({label}) => {
  return (
    <div className="flex flex-col items-center h-full max-h-screen justify-center mx-auto my-28 gap-16 max-sm:my-20">
      <h1 className="mx-auto font-extrabold text-3xl font-julius max-sm:text-2xl max-sm:text-center">
       {label === "Signin" ? `${label} currently unavailable` : `Your ${label} is Empty`}
      </h1>
      <SecondaryButton path="/products" label="Continue Shopping" center />
      
      {
        !label === "Signin" && (
          <div className="flex flex-col gap-4 font-serif text-center">
        <h4 className="font-extrabold text-2xl">Have an account?</h4>
        <p>
          {" "}
          <span className="cursor-pointer ">Sign In</span> to check out faster
        </p>
      </div>
        )
      }
    </div>
  );
};

export default EmptyList;
