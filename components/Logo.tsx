import logo from "../app/images/logo.svg";
import Image from "next/image";

export default function Logo(props: React.ComponentPropsWithoutRef<"div">) {
  return <Image src={logo} alt="starcoex-logo" width="40" height="40" {...props} />;
}
