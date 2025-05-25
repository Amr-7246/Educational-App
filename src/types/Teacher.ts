export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  subjects: Subject[];
  qualifications: Qualification[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Qualification {
  id: string;
  degree: string;
  institution: string;
  year: number;
  field: string;
  document?: string; // URL to uploaded certificate/document
}

export interface TeacherProfile {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture?: string;
    bio?: string;
  };
  professional: {
    subjects: Subject[];
    qualifications: Qualification[];
  };
  settings: {
    emailNotifications: boolean;
    twoFactorEnabled: boolean;
    availability: {
      timeZone: string;
      schedule: TeacherSchedule[];
    };
  };
}

export interface TeacherSchedule {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  slots: TimeSlot[];
}

export interface TimeSlot {
  start: string; // HH:mm format
  end: string; // HH:mm format
}
