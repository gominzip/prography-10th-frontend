import clsx from 'clsx';
import { Box } from '@/components';

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
  return (
    <Box>
      <div className="flex items-center justify-between w-full max-w-2xl mx-auto gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <>
            {index > 0 && <div className={clsx('h-1 flex-1', index <= currentStep ? 'bg-blue-500' : 'bg-gray-300')} />}
            <div
              className={clsx(
                'w-10 h-10 flex items-center justify-center rounded-full text-base transition-all duration-200',
                index <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              )}
            >
              {index + 1}
            </div>
          </>
        ))}
      </div>
    </Box>
  );
}

export default ProgressBar;
