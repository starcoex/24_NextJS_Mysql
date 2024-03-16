"use server";
import { z } from "zod";

const passwordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/);

function checkFirstChar(name: string) {
  const username = name.trim();
  const firstChar = username.charAt(0);
  return isNaN(parseInt(firstChar));
}

function checkContainsUppercase(password: string) {
  const uppercaseRegex = /[A-Z]/;
  const containersUppercase = uppercaseRegex.test(password);
  return containersUppercase;
}

function checkPasswordConfirm({ password, password_confirm }: { password: string; password_confirm: string }) {
  return password === password_confirm;
}

const formSchema = z
  .object({
    name: z
      .string({ invalid_type_error: "이름은 문자이어야 합니다.", required_error: "이름이 없습니다." })
      .min(2, "이름은 최소 2글자이어야 합니다.")
      .max(20, "이름은 20글자를 넘으면 안됩니다.")
      .toLowerCase()
      .trim()
      .refine(checkFirstChar, "첫 글자는 숫자는 포함되어서는 안됩니다."),
    email: z
      .string()
      .email()
      .min(5, "이메일은 최소5글자 이어야 합니다.")
      .max(40, "이메일은 40글자를 넘으면 안됩니다.")
      .toLowerCase()
      .trim(),
    // password: z
    //   .string()
    //   .min(5, "패스워드는 최소 5글자 이상 이어야 합니다.")
    //   .max(20, "패스워드은 20글자를 넘으면 안됩니다.")
    //   .regex(passwordRegex, "패스워드는 최소 하나의 숫자, 하나의 대문자, 하나의 특수문자를 포함해야 합니다")
    password: z
      .string()
      .min(5, "패스워드는 최소 5글자 이상 이어야 합니다.")
      .max(20, "패스워드은 20글자를 넘으면 안됩니다.")
      .refine(checkContainsUppercase, "한 글자는 대문자 이어야 합니다."),
    password_confirm: z.string().min(5).max(20),
  })
  .refine(checkPasswordConfirm, {
    message: "패스워드가 일치하지 않습니다.",
    path: ["password_confirm"],
  });

export async function register(preState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirm: formData.get("password_confirm"),
  };
  const result = formSchema.safeParse(data);
  console.log(result);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
