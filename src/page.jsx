import { logo } from "./assets";
import DateTime from "./components/datetime";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { ModeToggle } from "./components/ui/mode-toggle";
import { useToast } from "./components/ui/use-toast";

export default function LoginPage() {
  const USERNAME = "admin";
  const PASSWORD = "admin123";
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === USERNAME && password === PASSWORD) {
      toast({
        title: "Success",
        description: "Login successful!",
      });

      // Redirect to dashboard
      window.location.href = "/prediction";
    }
    // else if empty username or password
    else if (!username || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
    // else if wrong username or password
    else {
      toast({
        title: "Error",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <header className="top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          {/* logo */}
          <img src={logo} alt="MKSG Logo" className="w-28 dark:invert" />

          <div className="flex items-center gap-4">
            {/* datetime preview */}
            <DateTime className="font-jetbrains text-right font-mono text-xs text-foreground/60" />
            {/* mode toggle */}
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Login Section */}
      <section className="flex min-h-[75vh] flex-col items-center justify-center py-8">
        <Card className="min-w-screen-sm w-[400px] border bg-transparent p-8 text-center shadow-md shadow-primary/40">
          <h1 className="text-2xl font-semibold">
            <span>MKSG</span> Clothing
          </h1>
          <p className="text-foreground/40">Please login to continue</p>

          <form className="space-y-4 py-8" onSubmit={handleSubmit}>
            <Input type="text" placeholder="Username" name="username" />

            <Input type="password" placeholder="Password" name="password" />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Card>
      </section>
    </>
  );
}
