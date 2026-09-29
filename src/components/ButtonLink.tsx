import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/90",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: ButtonLinkProps) {
  const isDownload = Boolean(download);

  return (
    <a
      href={href}
      download={isDownload ? true : undefined}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
