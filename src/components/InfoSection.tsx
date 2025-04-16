
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function InfoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Understanding the Challenges</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the complex relationship between military operations, social media, and political discourse.
          </p>
        </div>

        <Tabs defaultValue="challenges" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="challenges">Key Challenges</TabsTrigger>
            <TabsTrigger value="impacts">Operational Impacts</TabsTrigger>
            <TabsTrigger value="solutions">Potential Solutions</TabsTrigger>
          </TabsList>
          <TabsContent value="challenges" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Information Leaks</CardTitle>
                <CardDescription>How social media can compromise operational security</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Real-time sharing on platforms like Twitter, Facebook, and WhatsApp can inadvertently reveal sensitive military movements, positions, and timing. Even seemingly innocent posts containing location data, timestamps, or identifiable backgrounds can be exploited by adversaries.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Disinformation Campaigns</CardTitle>
                <CardDescription>Strategic spread of false information</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Hostile actors can use social platforms to spread misinformation about military activities, creating public confusion, undermining trust in security forces, and potentially inciting civil unrest. These coordinated campaigns are increasingly sophisticated and difficult to counter.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Political Interference</CardTitle>
                <CardDescription>Exploitation of military matters for political gain</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Political actors may attempt to influence military operations through public pressure generated via social media campaigns. This can compromise operational decision-making and force commanders to consider political factors above tactical necessities.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="impacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Compromised Operations</CardTitle>
                <CardDescription>Direct threats to mission success</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Real-time information leaks have directly compromised military operations, leading to mission failures, strategic setbacks, and in some cases, casualties. The speed at which information spreads on social networks often outpaces official security protocols.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Public Perception Management</CardTitle>
                <CardDescription>Challenges in narrative control</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Military forces must increasingly consider public perception management while conducting operations, often detracting focus from primary objectives. The need to rapidly counter false narratives requires significant resources and specialized expertise.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Personnel Vulnerability</CardTitle>
                <CardDescription>Risks to individual service members</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Military personnel and their families can be targeted through information gathered on social media. This includes risks of physical targeting, social engineering, blackmail, and other forms of exploitation based on personal information shared online.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="solutions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Educational Frameworks</CardTitle>
                <CardDescription>Training and awareness programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Comprehensive training programs for military personnel on social media risks, operational security protocols, and responsible online behavior. These programs should be regularly updated to address evolving threats and platform changes.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Solutions</CardTitle>
                <CardDescription>Leveraging technology for protection</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Implementation of specialized monitoring tools to detect potential security breaches on social platforms. Development of secure communication channels and protocols that are resistant to interception or exploitation through social engineering.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Policy Development</CardTitle>
                <CardDescription>Balanced regulatory approaches</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Creating comprehensive policies that balance national security needs with rights to information access. These frameworks should include clear guidelines for military personnel, media organizations, and technology platforms regarding sensitive operations.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
