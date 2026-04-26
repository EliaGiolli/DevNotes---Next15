// app/error.tsx
"use client";

import Button from "@/shared/components/Buttons/Button";

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div 
        className="flex flex-col items-center justify-center min-h-screen gap-4" 
        aria-labelledby={error.name}
        role="alert"
    >
      <h1 className="text-2xl font-bold text-red-600" id={error.name}>Oops! Something went wrong.</h1>
      <p className="text-center text-gray-700">{error.message}</p>
      <Button 
        aria-label="Retry loading page"
        onClick={() => reset()}
      >   
        Try again
    </Button>
    </div>
  )
}