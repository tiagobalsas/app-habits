import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Progress.Root>
      <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
        <Progress.Indicator
          role='progressbar'
          aria-valuenow={progress}
          className='h-3 rounded-xl bg-violet-600'
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </Progress.Root>
  );
}
