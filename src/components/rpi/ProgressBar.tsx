export default function ProgressBar({ step }: { step: number }) {
  // Keeping 4 steps since there are 4 steps in page.tsx
  return (
    <div className="flex gap-2 justify-center">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className={`h-1.5 w-16 md:w-20 rounded-full transition-colors duration-300 ${
            step >= s ? "bg-[#3563ff]" : "bg-[#eceef3]"
          }`}
        />
      ))}
    </div>
  );
}
