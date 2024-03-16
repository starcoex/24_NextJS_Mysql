"use server";
import { z } from "zod";

function checkContainsUppercase(password: string) {
  const uppercaseRegex = /[A-Z]/;
  const containersUppercase = uppercaseRegex.test(password);
  return containersUppercase;
}
const formSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, "이메일은 최소5글자 이어야 합니다.")
    .max(40, "이메일은 40글자를 넘으면 안됩니다.")
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(5, "패스워드는 최소 5글자 이상 이어야 합니다.")
    .max(20, "패스워드은 20글자를 넘으면 안됩니다.")
    .refine(checkContainsUppercase, "한 글자는 대문자 이어야 합니다."),
  password_confirm: z.string().min(5).max(20),
});

export async function LoginAction(preState: any, formData: FormData) {
  console.log(preState);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  console.log(result);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
