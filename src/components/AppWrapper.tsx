import { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <main className="flex min-h-screen justify-center bg-sky-200 px-4 dark:bg-gray-800">
      <div className="flex max-w-2xl grow flex-col pt-6">{children}</div>
    </main>
  );
};

export default AppWrapper;
