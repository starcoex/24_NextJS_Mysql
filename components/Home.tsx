import AuthLayout from "@/components/AuthLayout";
import { TextField } from "@/components/Fields";
import { Metadata } from "next";
import { minify } from "next/dist/build/swc";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { Container } from "./Container";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <Container className="max-w-screen-sm">
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="my-auto *:font-medium flex flex-col items-center gap-2">
          <Logo className="mx-auto h-12 w-auto" />
          <h1 className="text-2xl">스타 코엑스</h1>
          <h2 className="text-xl">스타 마켓에 어서오세요.</h2>
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          <Link href={"/register"} className="primary-btn py-2.5 text-lg">
            시작하기
          </Link>
          <div className="flex gap-2 ">
            <span>이미 계정이 있나요?</span>
            <Link href={"/login"} className="hover:underline">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
