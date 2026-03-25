"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h3>Signin</h3>
      <FormControl defaultValue={credentials.username}
      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      placeholder="username" id="wd-username" className="mb-2" />
      <FormControl defaultValue={credentials.password}
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      placeholder="password" type="password" id="wd-password" className="mb-2" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2">Signin</Button>
      <Link href="signup" id="wd-signup-link">Signup</Link>
    </div>
  );
}