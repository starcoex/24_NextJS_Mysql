"use client";
import AuthLayout from "@/components/AuthLayout";
import SocialLogin from "@/components/Social-login";
import Link from "next/link";
import { useFormState } from "react-dom";
import { register } from "./actions";
import Input from "@/components/Input";
import Button from "@/components/Button";

// export const metadata: Metadata = {
//   title: "회원가입",
// };
export default function Register() {
  const [state, dispatch] = useFormState(register, null);
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
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          type="text"
          required
          placeholder="이름"
          errors={state?.fieldErrors.name}
          name="name"
          minLength={2}
          maxLength={20}
        />
        <Input
          type="email"
          required
          placeholder="이메일"
          errors={state?.fieldErrors.email}
          name="email"
          minLength={5}
          maxLength={40}
        />
        <Input
          type="password"
          required
          placeholder="패스워드"
          errors={state?.fieldErrors.password}
          name="password"
          minLength={5}
          maxLength={20}
        />
        <Input
          type="password"
          required
          placeholder="패스워드 확인"
          errors={state?.fieldErrors.password_confirm}
          name="password_confirm"
          minLength={5}
          maxLength={20}
        />
        <Button text="회원가입" />
      </form>
      <SocialLogin text="핸드폰으로 가입하세요" />
    </AuthLayout>
  );
}
