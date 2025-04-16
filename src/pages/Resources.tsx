
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Book, Users } from "lucide-react";

const Resources = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resources & Training Materials</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our educational materials about social media impacts on military operations.
            </p>
          </div>
          
          <Tabs defaultValue="documents" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            
            <TabsContent value="documents" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Social Media Security Framework",
                    description: "Guidelines for military personnel on social media usage",
                    icon: <FileText className="h-8 w-8 text-kenya-green" />,
                    size: "PDF • 1.2 MB"
                  },
                  {
                    title: "Disinformation Response Protocol",
                    description: "Steps to identify and counter false information",
                    icon: <FileText className="h-8 w-8 text-kenya-green" />,
                    size: "PDF • 890 KB"
                  },
                  {
                    title: "Policy Development Guide",
                    description: "Creating balanced security policies for digital age",
                    icon: <FileText className="h-8 w-8 text-kenya-green" />,
                    size: "PDF • 1.5 MB"
                  },
                  {
                    title: "Technical Solutions Overview",
                    description: "Current technologies for monitoring and protection",
                    icon: <FileText className="h-8 w-8 text-kenya-green" />,
                    size: "PDF • 2.1 MB"
                  }
                ].map((doc, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{doc.title}</CardTitle>
                        {doc.icon}
                      </div>
                      <CardDescription>{doc.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <span className="text-sm text-gray-500">{doc.size}</span>
                      <Button variant="outline" size="sm">Download</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-6">
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    title: "Social Media Threats to Operations",
                    description: "A detailed analysis of how social media can compromise missions",
                    length: "32:14"
                  },
                  {
                    title: "Digital OPSEC in the Field",
                    description: "Practical guidelines for maintaining operational security",
                    length: "45:07"
                  },
                  {
                    title: "Case Study: Operation Exposure Analysis",
                    description: "Detailed breakdown of a compromised operation and lessons learned",
                    length: "28:36"
                  }
                ].map((video, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <Video className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                        <p className="text-gray-600">{video.description}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-gray-500">Duration: {video.length}</span>
                        <Button>Watch Video</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="training" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Social Media Security Basics",
                    description: "Foundational course on operational security in the digital age",
                    modules: 6,
                    duration: "4 Hours"
                  },
                  {
                    title: "Advanced Disinformation Detection",
                    description: "Techniques for identifying coordinated information campaigns",
                    modules: 8,
                    duration: "6 Hours"
                  },
                  {
                    title: "Field Communications Security",
                    description: "Protocols for secure communications during operations",
                    modules: 5,
                    duration: "3 Hours"
                  },
                  {
                    title: "Command-Level Digital Strategy",
                    description: "Strategic approaches for leadership in managing digital risks",
                    modules: 7,
                    duration: "5 Hours"
                  }
                ].map((course, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{course.title}</CardTitle>
                        <Users className="h-8 w-8 text-kenya-red" />
                      </div>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm">
                        <span>{course.modules} Modules</span>
                        <span>{course.duration}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Access Course</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Impact of Social Media on Military Operations in Africa",
                    authors: "Johnson, K., Wambua, L., & Ochieng, P.",
                    year: 2023,
                    source: "Journal of African Security Studies"
                  },
                  {
                    title: "Disinformation Campaigns and National Security: Case Studies from East Africa",
                    authors: "Kimani, M., & Odhiambo, G.",
                    year: 2022,
                    source: "International Journal of Defense Technology"
                  },
                  {
                    title: "Policy Frameworks for Managing Social Media Risks in Counterterrorism Operations",
                    authors: "Njoroge, S., Smith, J., & Okello, D.",
                    year: 2023,
                    source: "Military Strategy Review"
                  }
                ].map((paper, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{paper.title}</CardTitle>
                        <Book className="h-8 w-8 text-kenya-black" />
                      </div>
                      <CardDescription className="mt-2">
                        {paper.authors} ({paper.year})
                      </CardDescription>
                      <CardDescription>
                        {paper.source}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Abstract</Button>
                      <Button>Full Paper</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
