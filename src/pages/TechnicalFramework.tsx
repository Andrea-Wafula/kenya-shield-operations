
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Clock, Database, Server, Users } from "lucide-react";

const TechnicalFramework = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-6 text-center">Technical Framework</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Educational overview of software and technical approaches for protecting military operations
              from social media and political interference.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Educational Purpose Only</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      This content is purely educational. It describes general technical approaches and considerations
                      that military and security organizations might implement. It does not provide actual code
                      or implementation details for systems that could be misused.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="monitoring" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
              <TabsTrigger value="prevention">Prevention</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
            </TabsList>
            
            <TabsContent value="monitoring" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Social Media Monitoring Framework</CardTitle>
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardDescription>
                    Educational overview of systems for monitoring public social media for security threats
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Military organizations can implement monitoring systems to identify potential security threats from
                    public social media activity. These systems typically include:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Public data aggregation:</strong> Collection and analysis of publicly available posts related 
                      to military activities, using keyword filtering and location data.
                    </li>
                    <li>
                      <strong>Pattern recognition:</strong> Analysis of posting patterns to identify coordinated information 
                      campaigns or unusual activity spikes around sensitive operations.
                    </li>
                    <li>
                      <strong>Image and video analysis:</strong> Screening of visual media that might reveal sensitive 
                      details about military equipment, positions, or personnel.
                    </li>
                    <li>
                      <strong>Geospatial correlation:</strong> Mapping social media activity to identify potential 
                      operational security risks in specific geographic areas.
                    </li>
                    <li>
                      <strong>Early warning systems:</strong> Automated alerts when potentially sensitive information 
                      appears on social platforms during critical operations.
                    </li>
                  </ul>
                  
                  <div className="p-4 border rounded-md bg-gray-50 mt-6">
                    <h4 className="font-semibold mb-2">Key Technical Considerations</h4>
                    <p>
                      These monitoring systems must be designed with careful attention to legal frameworks, privacy 
                      considerations, and appropriate authorization protocols. They should focus only on publicly 
                      available information and be subject to strict oversight to prevent misuse.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Information Analysis Systems</CardTitle>
                    <Database className="h-8 w-8 text-red-600" />
                  </div>
                  <CardDescription>
                    Technical approaches for analyzing social media data for security implications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    After data collection, military organizations can employ various analysis techniques to assess 
                    potential security implications:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Natural language processing:</strong> Using NLP to identify potentially sensitive 
                      information or threats within text content across multiple languages.
                    </li>
                    <li>
                      <strong>Network analysis:</strong> Mapping information spread patterns to identify sources and 
                      amplification nodes of security-relevant content.
                    </li>
                    <li>
                      <strong>Sentiment analysis:</strong> Tracking public sentiment related to military operations to 
                      identify potential shifts that could affect operational security.
                    </li>
                    <li>
                      <strong>Cross-platform correlation:</strong> Connecting related information across different social 
                      platforms to build comprehensive threat pictures.
                    </li>
                    <li>
                      <strong>Credential verification:</strong> Assessing the reliability and authenticity of sources 
                      spreading security-related information.
                    </li>
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold mb-2">Legitimate Use</h4>
                      <p className="text-sm">
                        Analysis systems should focus on identifying genuine security threats, not on suppressing 
                        legitimate criticism or political discourse. Clear guidelines must define what constitutes 
                        actionable intelligence.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold mb-2">Oversight Requirements</h4>
                      <p className="text-sm">
                        All analysis systems should operate under strict oversight protocols with regular auditing 
                        to ensure they remain within appropriate legal and ethical boundaries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="response" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Response Systems</CardTitle>
                    <Clock className="h-8 w-8 text-gray-800" />
                  </div>
                  <CardDescription>
                    Technical frameworks for responding to identified security threats
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    When security threats are identified, military organizations need systematic response protocols:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Threat classification framework:</strong> Systems for categorizing threats based on 
                      severity, credibility, and potential operational impact.
                    </li>
                    <li>
                      <strong>Escalation pathways:</strong> Technical workflows for routing threats to appropriate 
                      personnel based on classification and urgency.
                    </li>
                    <li>
                      <strong>Counterinformation systems:</strong> Frameworks for rapidly responding to misinformation 
                      with accurate, approved messaging.
                    </li>
                    <li>
                      <strong>Platform engagement protocols:</strong> Systems for expedited communication with social 
                      media platforms regarding critical security concerns.
                    </li>
                    <li>
                      <strong>Operational adjustment integration:</strong> Secure channels for feeding social media 
                      intelligence back to operational commanders for potential tactical adjustments.
                    </li>
                  </ul>
                  
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mt-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Response System Requirements</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                          <span className="text-xs">1</span>
                        </div>
                        <p className="text-sm text-blue-800">Rapid authentication mechanisms for response team members</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                          <span className="text-xs">2</span>
                        </div>
                        <p className="text-sm text-blue-800">Secure communication channels resistant to interception</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                          <span className="text-xs">3</span>
                        </div>
                        <p className="text-sm text-blue-800">Comprehensive logging for accountability and improvement</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                          <span className="text-xs">4</span>
                        </div>
                        <p className="text-sm text-blue-800">Regular testing through simulated scenarios and exercises</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="prevention" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Prevention Technologies</CardTitle>
                    <Server className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardDescription>
                    Preventative technical approaches to reduce social media risks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Military organizations can implement preventative technologies to reduce the risk of social media 
                    compromises before they occur:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Device management systems:</strong> Technical controls for military devices to prevent 
                      unauthorized social media access in sensitive areas or during operations.
                    </li>
                    <li>
                      <strong>Metadata scrubbing tools:</strong> Software that removes embedded location data, device 
                      identifiers, and other sensitive metadata from media before it can be shared.
                    </li>
                    <li>
                      <strong>Geofencing applications:</strong> Location-based technology that can restrict device 
                      capabilities within defined security perimeters.
                    </li>
                    <li>
                      <strong>Training simulation environments:</strong> Realistic platforms for personnel to practice 
                      identifying and avoiding social media security risks.
                    </li>
                    <li>
                      <strong>Secure communication alternatives:</strong> Providing approved, secure communication channels 
                      that reduce reliance on commercial social media platforms.
                    </li>
                  </ul>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold mb-2">Technical Specifications</h4>
                      <p className="text-sm">
                        Prevention systems should be designed with minimal impact on legitimate operations while 
                        providing maximum security for sensitive activities.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold mb-2">Integration Requirements</h4>
                      <p className="text-sm">
                        Prevention technologies must integrate seamlessly with existing military systems and work 
                        across multiple device types and operating environments.
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold mb-2">Usability Considerations</h4>
                      <p className="text-sm">
                        Prevention tools must be user-friendly to ensure adoption and reduce the likelihood of 
                        personnel attempting to circumvent security measures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="training" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Training Software Framework</CardTitle>
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <CardDescription>
                    Digital training systems for personnel education
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Comprehensive training systems are essential to educate personnel about social media risks:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Interactive learning platforms:</strong> Digital systems for delivering engaging, 
                      scenario-based security training with real-world examples.
                    </li>
                    <li>
                      <strong>Social media simulators:</strong> Mock environments where personnel can practice 
                      identifying and responding to various security scenarios.
                    </li>
                    <li>
                      <strong>Knowledge assessment tools:</strong> Testing frameworks to evaluate understanding of 
                      security protocols and provide targeted additional training.
                    </li>
                    <li>
                      <strong>Credential management education:</strong> Systems for teaching proper account security 
                      practices, including MFA, password management, and privacy settings.
                    </li>
                    <li>
                      <strong>Mobile learning applications:</strong> On-device training resources for continuous 
                      education and just-in-time learning during deployments.
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Training Modules Framework</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">Module Type</th>
                            <th className="border px-4 py-2 text-left">Content Focus</th>
                            <th className="border px-4 py-2 text-left">Delivery Method</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2">Basic Awareness</td>
                            <td className="border px-4 py-2">General security principles</td>
                            <td className="border px-4 py-2">Self-paced online</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border px-4 py-2">Role-specific</td>
                            <td className="border px-4 py-2">Security tailored to job function</td>
                            <td className="border px-4 py-2">Instructor-led virtual</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">Scenario Training</td>
                            <td className="border px-4 py-2">Realistic security situations</td>
                            <td className="border px-4 py-2">Interactive simulation</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border px-4 py-2">Leadership</td>
                            <td className="border px-4 py-2">Managing team security</td>
                            <td className="border px-4 py-2">Blended learning</td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2">Refresher</td>
                            <td className="border px-4 py-2">Updates on emerging threats</td>
                            <td className="border px-4 py-2">Mobile microlearning</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default TechnicalFramework;
