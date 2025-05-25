import { Teacher } from '@/types/Teacher';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery, useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Pencil, Save } from 'lucide-react';

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Partial<Teacher>>({});

  const { data: teacher, isLoading, error } = useQuery<Teacher>({
    queryKey: ['teacher-profile'],
    queryFn: async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/teachers/profile`, {
        withCredentials: true
      });
      return response.data;
    }
  });

  const updateProfile = useMutation({
    mutationFn: async (data: Partial<Teacher>) => {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/teachers/profile`,
        data,
        { withCredentials: true }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success('Profile updated successfully');
      setIsEditing(false);
    },
    onError: () => {
      toast.error('Failed to update profile');
    }
  });

  const handleSave = () => {
    updateProfile.mutate(editedProfile);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Teacher Profile</h1>
        <Button
          variant={isEditing ? "default" : "outline"}
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setEditedProfile(teacher || {});
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Pencil className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={teacher?.profilePicture || "/placeholder-avatar.jpg"}
                    alt={`${teacher?.firstName} ${teacher?.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                {isEditing ? (
                  <div className="space-y-2">
                    <Input
                      value={editedProfile.firstName}
                      onChange={(e) => setEditedProfile(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="First Name"
                    />
                    <Input
                      value={editedProfile.lastName}
                      onChange={(e) => setEditedProfile(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Last Name"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold">{teacher?.firstName} {teacher?.lastName}</h2>
                    <p className="text-muted-foreground">{teacher?.email}</p>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="w-full">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Professional Bio</h3>
                  {isEditing ? (
                    <Textarea
                      value={editedProfile.bio}
                      onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                      placeholder="Tell us about your teaching experience..."
                      className="min-h-[200px]"
                    />
                  ) : (
                    <p className="text-muted-foreground">{teacher?.bio}</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subjects" className="mt-6">
              <div className="grid gap-4">
                {teacher?.subjects.map((subject, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{subject.name}</h3>
                          <p className="text-sm text-muted-foreground">{subject.description}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {subject.level}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="qualifications" className="mt-6">
              <div className="grid gap-4">
                {teacher?.qualifications.map((qual, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold">{qual.degree}</h3>
                        <p className="text-muted-foreground">
                          {qual.institution}, {qual.year}
                        </p>
                        <p className="text-sm">{qual.field}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  {/* <div className="space-y-6">
                    {teacher?.settings?.availability?.schedule.map((day :  , index:number) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold">{day.day}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {day.slots.map((slot: { start: string | number | bigint | boolean | ReactElement<unknown, string > | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<>> | Iterable<ReactNode> | null | undefined> | null | undefined; end: string | number | bigint | boolean | ReactElement<unknown, string > | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string > | Iterable<ReactNode> | null | undefined> | null | undefined; }, slotIndex: Key | null | undefined) => (
                            <div
                              key={slotIndex}
                              className="px-3 py-2 rounded bg-secondary/10"
                            >
                              {slot.start} - {slot.end}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div> */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}