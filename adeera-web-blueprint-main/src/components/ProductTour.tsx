import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, X } from 'lucide-react';

interface TourStep {
  target: string;
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const tourSteps: TourStep[] = [
  {
    target: '.hero-section',
    title: 'Welcome to ADEERA',
    content: 'Discover how our SaaS solutions can transform your business operations.',
    position: 'bottom'
  },
  {
    target: '.features-section',
    title: 'Powerful Features',
    content: 'Explore our comprehensive suite of tools designed for African businesses.',
    position: 'top'
  },
  {
    target: '.services-section',
    title: 'Our Services',
    content: 'From CRM to cybersecurity, we offer end-to-end solutions.',
    position: 'left'
  }
];

export const ProductTour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    const tourSeen = localStorage.getItem('tourSeen');
    if (!tourSeen) {
      setIsOpen(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('tourSeen', 'true');
    setHasSeenTour(true);
  };

  const currentTourStep = tourSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{currentTourStep.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>{currentTourStep.content}</p>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={handleClose}>
            Skip Tour
          </Button>
          <Button onClick={handleNext}>
            {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 