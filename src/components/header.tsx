import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NaveLink } from "./nav-link";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NaveLink to="/">
            <Home className="size-4" />
            Inicio
          </NaveLink>
          <NaveLink to="/orders">
            <UtensilsCrossed className="size-4" />
            Pedidos
          </NaveLink>
        </nav>
      </div>
    </div>
  );
}
