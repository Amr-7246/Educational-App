import { ICourse } from "./coursesTypes";

// ? ################### Type for TS
  export interface ITeacher extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    specialization: string[];
    bio?: string;
    courses?: ICourse[];
    rating?: number;
    profileImage?: {
      secure_url: string;
      publicId: string;
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
// ? ################### Type for TS
