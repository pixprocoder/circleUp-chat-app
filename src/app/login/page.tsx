"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      console.log("object");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="text-center text-2xl">Login</h1>
      <Button onClick={loginWithGoogle}>
        {isLoading ? "Loading..." : "Continue with google"}
      </Button>
    </div>
  );
};

export default LoginPage;
