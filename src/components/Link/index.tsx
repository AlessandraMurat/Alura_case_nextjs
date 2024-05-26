import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

interface ILinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Link({
  href,
  children,
  className,
  ...props
}: ILinkProps) {
  return (
    <NextLink
      href={href}
      className={twMerge("text-white bg-blue-600 no-underline", className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}
