"use client";
import AuthLayout from "@/components/AuthLayout";
import SocialLogin from "@/components/Social-login";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { LoginAction } from "./actions";

// export const metadata: Metadata = {
//   title: "Home",
// };

export default function Login() {
  const [state, dispatch] = useFormState(LoginAction, null);
  return (
    <AuthLayout
      title="계정에 로그인 하세요"
      subtitle={
        <>
          계정이 없으면{" "}
          <Link href="/register" className="text-cyan-600">
            회원 가입
          </Link>{" "}
          을 부탁드립니다<div className=""></div>
        </>
      }
    >
      <form action={dispatch} className="flex flex-col gap-3">
        <Input type="email" required placeholder="이메일" name="email" />
        <Input type="password" required placeholder="패스워드" name="password" />
        <Button text="로그인" />
      </form>
      <SocialLogin text="핸드폰으로 시작하세요" />
    </AuthLayout>
  );
}
