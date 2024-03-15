import Link from "next/link";
import Logo from "./Logo";

export default function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
}) {
  return (
    <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <Link href="/" aria-label="Home">
          <Logo className="mx-auto h-10 w-auto" />
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900 dark:text-white">{title}</h1>
          {subtitle && <p className="mt-3 text-center text-lg text-gray-600">{subtitle}</p>}
        </div>
        <div className="-mx-4 mt-10 flex-auto bg-white dark:bg-neutral-900 dark:text-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  );
}
