export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  instructor: string;
  progress: number;
  enrolledDate: Date;
  completedDate?: Date;
}

export interface Certificate {
  id: string;
  courseName: string;
  issueDate: Date;
  certificationUrl: string;
  validUntil?: Date;
  grade?: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  enrolledCourses: Course[];
  certificates: Certificate[];
  createdAt: Date;
  updatedAt: Date;
}

export interface StudentProfile {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: string;
    bio?: string;
  };
  education: {
    enrolledCourses: Course[];
    certificates: Certificate[];
  };
  stats: {
    totalHours: number;
    activeDays: number;
    completedCourses: number;
    coursesInProgress: number;
  };
  settings: {
    emailNotifications: boolean;
    twoFactorEnabled: boolean;
    language: string;
    timeZone: string;
  };
}
