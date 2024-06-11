import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh] w-[300px]'>
          <Sidebar />
       </div>   {/*  // p-5 md:max-w-[1140px] lg:w-full w-full */}
        <div className='p-5 container mx-auto'>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;