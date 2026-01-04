export default function Logo({ className = "h-16", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  return (
    <img
      src="/image.png"
      alt="Vila's Baterias"
      className={className}
    />
  );
}
