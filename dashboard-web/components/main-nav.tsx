import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary px-3 py-1 rounded-lg bg-[#fff]"
      >
        Home
      </Link>
      <Link
        href="/dashboard/users"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Usuários
      </Link>
      <Link
        href="/dashboard/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Produtos
      </Link>
    </nav>
  );
}
