'use client'
import { useSignOut } from '@/APIs/Auth/signOut';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { FaSignOutAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useGetEntity, usePatchEntity } from '@/APIs/REST';
import { IStudent } from '@/types/StudentsTypes';

const StudentPortfolio = () => {
  const {data : UserInfo  } = useGetEntity<IStudent>('student')
  const { mutate  } = usePatchEntity('student' , UserInfo?._id || '' )
  const signOut = useSignOut();
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    name: UserInfo?.name || '',
    email: UserInfo?.email || '',
    phoneNumber: UserInfo?.phoneNumber || '',
  });

  if (!UserInfo) {
    return (
      <div className="flex-center min-h-screen">
        <p className="text-foreground">Loading...</p>
      </div>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
    setEditedInfo({
      name: UserInfo.name,
      email: UserInfo.email,
      phoneNumber: UserInfo.phoneNumber || '',
    });
  };

  const HandleSave = async () => {
    try {
      mutate(editedInfo)
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error : unknown ) {
      console.log(error)
      toast.error('Failed to update profile');
    }
  };

  const handleSignOut = () => {
    if (UserInfo._id) {
      signOut.mutate(UserInfo._id);
    }
  };

  return (
    <div className="page p-6">
      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-8">

        <div className="flex justify-between items-start mb-8">
          <h1 className="text-3xl font-bold text-foreground">Student Portfolio</h1>
          <div className="flex gap-4">
            <button
              onClick={handleEdit}
              className="btn-secondary flex items-center gap-2"
            >
              <BiEditAlt className="w-5 h-5" />
              Edit Profile
            </button>
            <button
              onClick={handleSignOut}
              className="btn-primary flex items-center gap-2 bg-red-500 hover:bg-red-600"
            >
              <FaSignOutAlt className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              {UserInfo.profileImage ? (
                <Image
                  src={UserInfo.profileImage.secure_url}
                  alt={UserInfo.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-background-secondary flex-center">
                  <span className="text-4xl text-foreground-muted">
                    {UserInfo.name[0]}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    value={editedInfo.name}
                    onChange={(e) =>
                      setEditedInfo({ ...editedInfo, name: e.target.value })
                    }
                    className="input-primary w-full"
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={editedInfo.email}
                    onChange={(e) =>
                      setEditedInfo({ ...editedInfo, email: e.target.value })
                    }
                    className="input-primary w-full"
                  />
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    value={editedInfo.phoneNumber}
                    onChange={(e) =>
                      setEditedInfo({ ...editedInfo, phoneNumber: e.target.value })
                    }
                    className="input-primary w-full"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button onClick={HandleSave} className="btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Name</h2>
                  <p className="text-foreground-secondary">{UserInfo.name}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Email</h2>
                  <p className="text-foreground-secondary">{UserInfo.email}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Phone Number
                  </h2>
                  <p className="text-foreground-secondary">
                    {UserInfo.phoneNumber || 'Not provided'}
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Enrolled Courses
                  </h2>
                  <p className="text-foreground-secondary">
                    {UserInfo.enrolledCourses?.length || 0} courses
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Wishlist
                  </h2>
                  <p className="text-foreground-secondary">
                    {UserInfo.wishlist?.length || 0} courses
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Account Status
                  </h2>
                  <p className="text-foreground-secondary">
                    {UserInfo.isActive ? 'Active' : 'Inactive'}
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Member Since
                  </h2>
                  <p className="text-foreground-secondary">
                    {new Date(UserInfo.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentPortfolio;