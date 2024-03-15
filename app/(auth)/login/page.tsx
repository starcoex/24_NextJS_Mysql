import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { TextField } from "@/components/Fields";
import FormButton from "@/components/Form-Btn";
import FormInput from "@/components/Form-Input";
import SocialLogin from "@/components/Socail-login";
import { Metadata } from "next";
import { minify } from "next/dist/build/swc";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
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
      <form action="" className="flex flex-col gap-3">
        <FormInput type="email" required placeholder="이메일" errors={[]} />
        <FormInput type="password" required placeholder="패스워드" errors={[]} />
        <FormButton text="로그인" loading={false} />
      </form>
      <SocialLogin text="핸드폰으로 시작하세요" />
    </AuthLayout>
  );
}
