import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';

interface ProgressStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
  currentStep: number;
  onStepComplete: (stepId: string) => void;
}

export const ProgressTracker = ({ steps, currentStep, onStepComplete }: ProgressTrackerProps) => {
  const progress = (steps.filter(step => step.completed).length / steps.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Your Progress</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-6" />
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-start gap-4 p-4 rounded-lg border ${
                index === currentStep ? 'border-primary bg-primary/5' : 'border-muted'
              }`}
            >
              <div className="mt-1">
                {step.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {!step.completed && index === currentStep && (
                <button
                  onClick={() => onStepComplete(step.id)}
                  className="text-sm text-primary hover:underline"
                >
                  Mark Complete
                </button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 