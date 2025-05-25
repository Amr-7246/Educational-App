
// ? ################### Type for TS
export interface IStudent {
  _id: string;
  name: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
  refreshToken: string;
  phoneNumber?: string;
  enrolledCourses?: string[];
  wishlist?: string[];
  profileImage?: {
    secure_url: string;
    publicId: string;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
// ? ################### Type for TS
