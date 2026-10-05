import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-3">
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="size-4 rotate-45 rounded-sm border-2 border-primary"
        />
        <span className="text-lg font-semibold">Jobsekai</span>
      </div>
      <Button>Sign in/up</Button>
    </header>
  );
}
