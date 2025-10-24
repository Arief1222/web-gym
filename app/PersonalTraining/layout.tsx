export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-[100%]">
      {children}
    </div>
  );
}