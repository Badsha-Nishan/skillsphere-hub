"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    );
    const { data, error } = await authClient.signIn.email({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      callbackURL: "/courses",
    });
    if (error) {
      toast.error(`"ERROR", ${error.message}`, { position: "top-center" });
    }
    if (!error) {
      toast.success("Login Successful", { position: "top-center" });
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="flex justify-center items-center py-12 bg-linear-to-r from-[#2341b2] to-[#845af1] h-screen">
      <Form className="flex w-96 flex-col gap-4 space-y-2" onSubmit={onSubmit}>
        <h2 className="text-center text-2xl text-white font-bold">
          Login your account
        </h2>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-white">Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>
        <TextField
          className={"relative"}
          isRequired
          minLength={8}
          name="password"
          type={showPassword ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <button
            type="button"
            className="text-xl absolute right-3 top-8 btn-neutral btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaEyeSlash />}
          </button>
          <Label className="text-white">Password</Label>
          <Input placeholder="Enter your password" />
          <Description className="text-red-200">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button className={"w-full"} type="submit">
            <Check />
            Login
          </Button>
          <Button className={"w-full"} type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-white">No Account?</p>
          <Link className="underline text-red-300" href={"/register"}>
            SignUp
          </Link>
        </div>
        <p className="text-white text-center">Or</p>
        <div>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full border bg-gradient-to-l from-[#2341b2] to-[#845af1]
           bg-[length:200%_100%] bg-left
           transition-all duration-200
           hover:bg-right"
          >
            <FaGoogle />
            Login with Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
