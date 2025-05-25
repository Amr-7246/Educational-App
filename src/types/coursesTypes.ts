
// ? ################### Types for TS
// ~ Lessons Videos type 
  export interface ILesson {
    title: string;
    description: string;
    videoUrl: string;
    duration: number; //* in minutes
    order: number;
    isPreview: boolean; //* free preview lesson
  }
// ~ Lessons Videos type 
// ~ Lessons of the Module 
  export interface IModule {
    title: string;
    description: string;
    lessons: ILesson[];
    order: number;
  }
// ~ Lessons of the Module 
// ~ nstructor  
  export interface IInstructor {
    name: string;
    bio: string;
    avatar: { secure_url: string; publicId: string };
    expertise: string[];
  }
// ~ nstructor  
// ~ Finnal Courses Type
  export interface ICourse {
    _id: string;
    title: string;
    description: string;
    shortDescription: string;
    thumbnail: { secure_url: string; publicId: string };
    trailerVideo?: string; //* promotional video
    
    //* Course Structure
    modules: IModule[];
    totalDuration: number; //* in minutes
    totalLessons: number;
    
    //* Instructor Info
    instructor: IInstructor;
    
    //* Pricing & Business
    price: number;
    discount: number;
    originalPrice: number; //* calculated field
    
    //* Course Meta
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    language: string;
    category: string;
    tags: string[];
    
    //* Student Metrics
    enrolledStudents: number;
    averageRating: number;
    totalReviews: number;
    
    //* Course Status
    isPublished: boolean;
    isRecommended: boolean;
    
    //* Requirements & Outcomes
    requirements: string[];
    learningOutcomes: string[];
    
    //* Dates
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
  }
// ~ Finnal Courses Type
// ? ################### Types for TS