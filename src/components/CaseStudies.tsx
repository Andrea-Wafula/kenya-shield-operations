
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Global Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learning from documented incidents where social media affected military operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle>Operation Exposure</CardTitle>
              <CardDescription>Middle East, 2019</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">
                A special forces operation was compromised when civilians posted troop movements on Twitter in real-time.
              </p>
              <p className="text-sm text-gray-600">
                The incident led to mission failure and protocol revisions across multiple allied nations.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-red-50">
              <CardTitle>Disinformation Campaign</CardTitle>
              <CardDescription>Eastern Europe, 2022</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">
                Coordinated false information about troop positions spread rapidly across platforms, creating panic.
              </p>
              <p className="text-sm text-gray-600">
                The incident highlighted the need for rapid response teams dedicated to countering false narratives.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="bg-gray-50">
              <CardTitle>Political Interference</CardTitle>
              <CardDescription>West Africa, 2021</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">
                A counterterrorism operation was altered due to political pressure stemming from viral social media content.
              </p>
              <p className="text-sm text-gray-600">
                The case demonstrated how operational decisions can be compromised by public opinion driven by incomplete information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
