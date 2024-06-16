
"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserProfileType } from '@/types/profile';
import { getUser } from '@/lib/fetchUserInfo';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<UserProfileType | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const userData:any = await getUser();
      console.log('User data:', userData);
      if (!userData) {
        router.push('/login'); // Redirect to login if no user data is found
      } else {
        setUser(userData!);
      }
    }
    fetchData();
  }, [router]);

  if (!user) {
return <div className='flex flex-col justify-around items-center p-40'>Loading...</div>;
  }

  const {
    app_metadata,
    confirmed_at,
    created_at,
    email,
    email_confirmed_at,
    id,
    is_anonymous,
    last_sign_in_at,
    phone,
    role,
    updated_at,
  } = user;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-inner">
        <img
          src={`https://api.dicebear.com/5.x/initials/svg?seed=${email}`}
          alt="Profile Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-300"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">{email}</h2>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">User Details</h3>
          <div className="text-gray-600">
            <p><span className="font-medium">ID:</span> {id}</p>
            <p><span className="font-medium">Created At:</span> {new Date(created_at).toLocaleString()}</p>
            <p><span className="font-medium">Last Sign In At:</span> {new Date(last_sign_in_at).toLocaleString()}</p>
            <p><span className="font-medium">Updated At:</span> {new Date(updated_at).toLocaleString()}</p>
            <p><span className="font-medium">Is Anonymous:</span> {is_anonymous ? 'Yes' : 'No'}</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Information</h3>
          <div className="text-gray-600">
            <p><span className="font-medium">Email:</span> {email}</p>
            <p><span className="font-medium">Email Confirmed At:</span> {new Date(email_confirmed_at).toLocaleString()}</p>
            <p><span className="font-medium">Phone:</span> {phone ? phone : 'N/A'}</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Metadata</h3>
          <div className="text-gray-600">
            <p><span className="font-medium">Provider:</span> {app_metadata.provider}</p>
            <p><span className="font-medium">Providers:</span> {app_metadata.providers.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
