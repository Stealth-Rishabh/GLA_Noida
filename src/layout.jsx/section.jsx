import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  containerClassName,
  background = "bg-white",
  spacing = "py-16 md:py-24",
}) {
  return (
    <section className={cn("w-full", background, spacing, className)}>
      <div
        className={cn("container max-w-7xl mx-auto px-4", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}
