import { logo } from "@/assets";
import PageLinks from "./page-links";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TbMenuDeep } from "react-icons/tb";
import DateTime from "./datetime";
import { ModeToggle } from "./ui/mode-toggle";
import { MdLogout } from "react-icons/md";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "./ui/use-toast";

export default function Header() {
  const isCurrent = (path) => window.location.pathname === path;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <header className="top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* md-lg screen navigation */}
        <div className="mr-4 hidden md:flex">
          {/* logo */}
          <img src={logo} alt="MKSG Logo" className="w-36 pr-8 dark:invert" />

          {/* links */}
          <nav className="flex items-center space-x-3 text-sm">
            <PageLinks isCurrent={isCurrent} />
          </nav>
        </div>

        <Popover>
          <PopoverTrigger>
            {/* menu button */}
            <TbMenuDeep
              size={24}
              className="rotate-180 cursor-pointer transition-colors hover:opacity-50 md:hidden"
            />
          </PopoverTrigger>
          {/* menu links */}
          <PopoverContent className="ml-8 flex max-w-32 flex-col items-center space-y-2 text-sm md:hidden">
            <PageLinks isCurrent={isCurrent} />
          </PopoverContent>
        </Popover>

        <div className="flex items-center gap-4">
          {/* datetime preview */}
          <DateTime className="font-jetbrains text-right font-mono text-xs text-foreground/60" />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={handleLogout}
              title="Logout"
            >
              <MdLogout size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
