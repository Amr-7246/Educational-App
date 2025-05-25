import { Teacher, Subject, Qualification } from '@/types/Teacher';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import  Link  from "next/link";
import { useRouter } from 'next/navigation';
import { toast } from "react-hot-toast";
import axios from 'axios';

interface TeacherFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  subjects: Subject[];
  qualifications: Qualification[];
}

export default function TeacherSignup() {
  const router = useRouter();
  const [formData, setFormData] = useState<TeacherFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: '',
    subjects: [],
    qualifications: []
  });

  const [subjectInput, setSubjectInput] = useState({
    name: '',
    description: '',
    level: 'Beginner' as const
  });

  const [qualificationInput, setQualificationInput] = useState({
    degree: '',
    institution: '',
    year: new Date().getFullYear(),
    field: ''
  });

  const signup = useMutation({
    mutationFn: async (data: Omit<Teacher, "id" | "createdAt" | "updatedAt">) => {
      const res = await axios.post(`${process.env.BACK_END_URL}/auth/signup`, {
        ...data,
        userType: 'teacher'
      });
      return res.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuccess: (data: unknown ) => {
      toast.success('Account created successfully! Please log in.');
      router.push('/teachers/login');
    },
    onError: (error: unknown) => {
      toast.error(error.response?.data?.message || 'Failed to create account');
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.subjects.length === 0) {
      toast.error('Please add at least one subject');
      return;
    }

    if (formData.qualifications.length === 0) {
      toast.error('Please add at least one qualification');
      return;
    }

    try {
      await signup.mutateAsync({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        bio: formData.bio,
        subjects: formData.subjects,
        qualifications: formData.qualifications
      });
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSubject = () => {
    if (!subjectInput.name || !subjectInput.level) {
      toast.error('Please fill in all subject fields');
      return;
    }

    setFormData(prev => ({
      ...prev,
      subjects: [...prev.subjects, { ...subjectInput, id: Math.random().toString() }]
    }));

    setSubjectInput({
      name: '',
      description: '',
      level: 'Beginner'
    });
  };

  const addQualification = () => {
    if (!qualificationInput.degree || !qualificationInput.institution || !qualificationInput.field) {
      toast.error('Please fill in all qualification fields');
      return;
    }

    setFormData(prev => ({
      ...prev,
      qualifications: [...prev.qualifications, { ...qualificationInput, id: Math.random().toString() }]
    }));

    setQualificationInput({
      degree: '',
      institution: '',
      year: new Date().getFullYear(),
      field: ''
    });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create Teacher Account</CardTitle>
            <CardDescription className="text-center">
              Enter your information to create your teaching profile
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about your teaching experience and expertise..."
                    required
                  />
                </div>
              </div>

              {/* Subjects */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Subjects You Teach</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Subject Information</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Subject Name"
                        value={subjectInput.name}
                        onChange={(e) => setSubjectInput(prev => ({ ...prev, name: e.target.value }))}
                      />
                      <select
                        className="form-select"
                        value={subjectInput.level}
                        onChange={(e) => setSubjectInput(prev => ({ ...prev, level: e.target.value as any }))}
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                    <Input
                      placeholder="Subject Description"
                      value={subjectInput.description}
                      onChange={(e) => setSubjectInput(prev => ({ ...prev, description: e.target.value }))}
                    />
                    <Button type="button" variant="outline" onClick={addSubject}>
                      Add Subject
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {formData.subjects.map((subject, index) => (
                      <div key={index} className="p-2 bg-secondary/10 rounded-md">
                        <p className="font-medium">{subject.name}</p>
                        <p className="text-sm text-muted-foreground">{subject.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Educational Qualifications</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="Degree"
                        value={qualificationInput.degree}
                        onChange={(e) => setQualificationInput(prev => ({ ...prev, degree: e.target.value }))}
                      />
                      <Input
                        placeholder="Institution"
                        value={qualificationInput.institution}
                        onChange={(e) => setQualificationInput(prev => ({ ...prev, institution: e.target.value }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="number"
                        placeholder="Year"
                        value={qualificationInput.year}
                        onChange={(e) => setQualificationInput(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                      />
                      <Input
                        placeholder="Field of Study"
                        value={qualificationInput.field}
                        onChange={(e) => setQualificationInput(prev => ({ ...prev, field: e.target.value }))}
                      />
                    </div>
                    <Button type="button" variant="outline" onClick={addQualification}>
                      Add Qualification
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {formData.qualifications.map((qual, index) => (
                      <div key={index} className="p-2 bg-secondary/10 rounded-md">
                        <p className="font-medium">{qual.degree}</p>
                        <p className="text-sm text-muted-foreground">{qual.institution}, {qual.year}</p>
                        <p className="text-sm">{qual.field}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Security</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                className="w-full mb-4"
                type="submit"
                disabled={signup.isPending}
              >
                {signup.isPending ? "Creating Account..." : "Create Account"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/teachers/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
