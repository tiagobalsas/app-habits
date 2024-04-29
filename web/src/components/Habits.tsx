interface HabitsProps {
  completed: number;
}

export function Habits({ completed }: HabitsProps) {
  return (
    <div className="bg-zinc-900 w-10 text-white rounded m-2 flex items-center justify-center">
      {completed}
    </div>
  );
}
