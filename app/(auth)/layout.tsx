import ThemeToggler from '@/components/ThemeToggler';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[100vh] bg-blue-400 flex items-center justify-center relative dark:bg-slate-800 dark:text-white'>
      <div className='absolute bottom-5 right-0 text-white'>
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;