import AuthLayout from "@/components/AuthLayout";
import FormButton from "@/components/Button";
import FormInput from "@/components/Input";
import Link from "next/link";

export default function SMSLogin() {
  return (
    <AuthLayout
      title="문자로 로그인 하세요"
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
        <FormInput type="number" required placeholder="핸드폰 번호" errors={[]} name="phone" />
        <FormInput type="number" required placeholder="인증 번호" errors={[]} name="phone-confirm" />
        <FormButton text="핸드폰 로그인 " />
      </form>
    </AuthLayout>
  );
}
