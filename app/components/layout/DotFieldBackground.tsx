"use client";

import DotField from "@/app/components/reactbits/DotField";

export default function DotFieldBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="w-full h-full">
        <DotField
          dotRadius={2}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(45, 212, 191, 0.3)"
          gradientTo="rgba(139, 92, 246, 0.2)"
          glowColor="#050508"
        />
      </div>
    </div>
  );
}
