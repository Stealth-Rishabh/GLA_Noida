import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  containerClassName,
  background = "bg-white",
  spacing = "py-8 md:py-16",
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
