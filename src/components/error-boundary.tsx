'use client';
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [error, setError] = useState<Error | null>(null);

  // This useEffect acts as a replacement for componentDidCatch for simpler error handling.
  // For production-grade error boundaries in functional components,
  // a library like 'react-error-boundary' is generally recommended.
  useEffect(() => {
    const handleError = (errorEvent: ErrorEvent) => {
      setError(errorEvent.error);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleCloseDialog = () => {
    setError(null);
  };

  const hasError = !!error;

  if (hasError) {
    return (
      <ErrorMessageDialog isOpen={hasError} onClose={handleCloseDialog} />
    );
  }

  return <>{children}</>;
};

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

// ============================================================================
// ErrorMessageDialog
// ============================================================================

const ErrorMessageDialog = ({ isOpen }: ErrorMessageDialogProps) => {
  return(
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Alert>
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Apologies!</AlertTitle>
            <AlertDescription>
              Something went wrong while rendering the page. Please try again later or contact support if the issue persists.
            </AlertDescription>
          </Alert>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface ErrorMessageDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default ErrorBoundary;
