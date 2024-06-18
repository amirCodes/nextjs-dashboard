"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserProfileType } from '@/types/profile';
import { getUser } from '@/lib/fetchUserInfo';
import { createClient } from '@/utils/supabase/client';

const UpdateUser: React.FC = () => {
  const [user, setUser] = useState<UserProfileType>();
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function fetchData() {
      const userData = await getUser();
      if (!userData) {
        router.push('/auth');
      } else {
        setUser(userData);
        setPhone(userData.phone || '');
        setEmail(userData.email || '');
      } 
    }
    fetchData();
  }, [router]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    if (!user) return;
     console.log(phone,email)
    const { error } = await supabase.auth.updateUser({
      email:email,
      phone: phone,
    });

    if (error) {
      console.error('Error updating user:', error);
    } else {
      alert('User updated successfully');
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <h1 className="text-2xl font-semibold mb-4">Update Your Profile</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email address
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
