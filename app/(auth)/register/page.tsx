import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SelectField, TextField } from "@/components/Fields";
import FormButton from "@/components/Form-Btn";
import FormInput from "@/components/Form-Input";
import SocialLogin from "@/components/Social-login";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create-Account",
};
export default function CreateAccount() {
  return (
    <AuthLayout
      title="계정에 가입하세요!"
      subtitle={
        <>
          이미 등록된 분은{" "}
          <Link href="/login" className="text-cyan-600">
            로그인
          </Link>{" "}
          하십시오.
        </>
      }
    >
      {" "}
      <form className="flex flex-col gap-3">
        <FormInput type="text" required placeholder="이름" errors={[]} />
        <FormInput type="email" required placeholder="이메일" errors={[]} />
        <FormInput type="password" required placeholder="패스워드" errors={[]} />
        <FormInput type="password" required placeholder="패스워드 확인" errors={[]} />
        <FormButton text="회원가입" loading={false} />
      </form>
      <SocialLogin text="핸드폰으로 가입하세요" />
    </AuthLayout>
  );
}
