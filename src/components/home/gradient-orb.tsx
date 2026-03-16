type GradientOrbProps = {
  className?: string;
};

export function GradientOrb({ className }: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(78,120,255,0.9) 0%, rgba(124,58,237,0.55) 45%, rgba(0,0,0,0) 75%)",
      }}
    />
  );
}