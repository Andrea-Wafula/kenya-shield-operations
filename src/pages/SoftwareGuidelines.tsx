
import { Layout } from "@/components/Layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SoftwareGuidelines = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-6 text-center">Software Implementation Guidelines</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Education-focused overview of software considerations for military organizations addressing social media risks
            </p>
            
            <Alert className="bg-yellow-50 border-yellow-400 mb-8">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-800">Educational Purpose Only</AlertTitle>
              <AlertDescription className="text-yellow-700">
                This information is provided for educational purposes to understand the types of software approaches 
                that could address security concerns. This is not actual code or implementation guidance.
              </AlertDescription>
            </Alert>
          </div>
          
          <Tabs defaultValue="architecture" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="architecture" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Architecture Considerations</CardTitle>
                  <CardDescription>
                    Key architectural approaches for building secure military social media monitoring systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Core Architecture Components</h3>
                    <ul className="space-y-4">
                      <li className="border-l-4 border-kenya-green pl-4 py-2">
                        <span className="font-medium block">Data Collection Layer</span>
                        <span className="text-gray-600 text-sm">
                          APIs and web crawlers for gathering public social media content using permitted access methods,
                          with strong focus on legal compliance and respect for platform terms of service.
                        </span>
                      </li>
                      <li className="border-l-4 border-kenya-red pl-4 py-2">
                        <span className="font-medium block">Processing & Analysis Engine</span>
                        <span className="text-gray-600 text-sm">
                          Natural language processing, image recognition, and pattern detection systems that identify
                          potential security risks in collected data using scalable processing frameworks.
                        </span>
                      </li>
                      <li className="border-l-4 border-kenya-green pl-4 py-2">
                        <span className="font-medium block">Secure Storage Systems</span>
                        <span className="text-gray-600 text-sm">
                          Encrypted databases with strict access controls, audit logging, and data retention policies
                          that align with legal requirements and minimize unnecessary data storage.
                        </span>
                      </li>
                      <li className="border-l-4 border-kenya-red pl-4 py-2">
                        <span className="font-medium block">Alert & Response Framework</span>
                        <span className="text-gray-600 text-sm">
                          Notification systems with configurable thresholds, escalation paths, and response workflow
                          management to ensure appropriate handling of identified threats.
                        </span>
                      </li>
                      <li className="border-l-4 border-kenya-green pl-4 py-2">
                        <span className="font-medium block">Integration Layer</span>
                        <span className="text-gray-600 text-sm">
                          Secure APIs and interfaces for connecting with other military systems while maintaining
                          strict access controls and data segregation where required.
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Architecture Patterns</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Microservices Architecture</h4>
                        <p className="text-sm text-gray-600">
                          Breaking the system into discrete, independently deployable services improves security
                          by limiting the impact of potential compromises and allowing granular access control.
                        </p>
                      </div>
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Air-Gapped Processing</h4>
                        <p className="text-sm text-gray-600">
                          Physically separating critical analysis systems from internet-connected collection
                          systems to prevent direct attacks and data exfiltration.
                        </p>
                      </div>
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Defense in Depth</h4>
                        <p className="text-sm text-gray-600">
                          Implementing multiple security layers at each tier of the architecture to ensure
                          that no single failure can compromise the entire system.
                        </p>
                      </div>
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Secure by Design</h4>
                        <p className="text-sm text-gray-600">
                          Building security controls directly into the architecture rather than adding them
                          afterward, with threat modeling guiding all design decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Requirements</CardTitle>
                  <CardDescription>
                    Critical security considerations for military social media monitoring systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Core Security Requirements</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border px-4 py-2 text-left">Security Domain</th>
                            <th className="border px-4 py-2 text-left">Requirements</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Authentication</td>
                            <td className="border px-4 py-2">
                              <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Multi-factor authentication for all system access</li>
                                <li>Role-based authorization with least privilege principle</li>
                                <li>Hardware security token integration for sensitive operations</li>
                                <li>Centralized identity management with strict provisioning</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border px-4 py-2 font-medium">Data Protection</td>
                            <td className="border px-4 py-2">
                              <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>End-to-end encryption for all stored and transmitted data</li>
                                <li>Strong key management with regular rotation</li>
                                <li>Data anonymization where appropriate to protect privacy</li>
                                <li>Secure destruction procedures for expired data</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="border px-4 py-2 font-medium">Network Security</td>
                            <td className="border px-4 py-2">
                              <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Defense in depth with multiple security layers</li>
                                <li>Network segmentation to isolate critical components</li>
                                <li>Advanced intrusion detection and prevention</li>
                                <li>Regular penetration testing and vulnerability scanning</li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border px-4 py-2 font-medium">Audit & Compliance</td>
                            <td className="border px-4 py-2">
                              <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Comprehensive audit logging of all system actions</li>
                                <li>Tamper-evident logging with integrity protection</li>
                                <li>Regular compliance assessments against security standards</li>
                                <li>Independent security audits and oversight</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Threat Mitigation</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">Insider Threat Protection</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Systems must be designed to mitigate potential misuse by authorized users while maintaining operational effectiveness:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          <li>Strict separation of duties for sensitive operations</li>
                          <li>Behavior analytics to detect unusual access patterns</li>
                          <li>Two-person integrity controls for critical functions</li>
                          <li>Granular access controls based on need-to-know principles</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">External Attack Resilience</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Systems must resist sophisticated external attacks targeting sensitive military information:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                          <li>Advanced endpoint protection against malware and exploits</li>
                          <li>Regular security patching with minimal operational disruption</li>
                          <li>Zero-trust architecture principles for all access decisions</li>
                          <li>Deception technology to detect and divert attackers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="implementation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Approaches</CardTitle>
                  <CardDescription>
                    General implementation considerations for military social media monitoring systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Development Methodology</h3>
                    <p className="mb-4">
                      Military organizations should adopt secure development practices that emphasize security at every stage:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Planning Phase</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Comprehensive threat modeling</li>
                          <li>Security requirements definition</li>
                          <li>Privacy impact assessment</li>
                          <li>Legal compliance verification</li>
                        </ul>
                      </div>
                      
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Development Phase</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Secure coding standards</li>
                          <li>Regular code reviews</li>
                          <li>Static and dynamic analysis</li>
                          <li>Security unit testing</li>
                        </ul>
                      </div>
                      
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Deployment Phase</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Secure configuration management</li>
                          <li>Vulnerability scanning</li>
                          <li>Penetration testing</li>
                          <li>Security approval gates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technology Selection</h3>
                    <p className="mb-4">
                      When choosing technologies for military social media monitoring systems, consider:
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-kenya-green flex items-center justify-center text-white flex-shrink-0">✓</div>
                          <div>
                            <span className="font-medium">Security track record</span>
                            <p className="text-sm text-gray-600 mt-1">
                              Prefer technologies with proven security histories and active maintenance.
                              Evaluate past vulnerabilities and how quickly they were addressed.
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-kenya-green flex items-center justify-center text-white flex-shrink-0">✓</div>
                          <div>
                            <span className="font-medium">Supply chain security</span>
                            <p className="text-sm text-gray-600 mt-1">
                              Assess the security of the entire supply chain for both hardware and software components.
                              Consider origin, development practices, and potential vulnerabilities.
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-kenya-green flex items-center justify-center text-white flex-shrink-0">✓</div>
                          <div>
                            <span className="font-medium">Auditability</span>
                            <p className="text-sm text-gray-600 mt-1">
                              Choose solutions that provide comprehensive audit trails and logging capabilities.
                              Systems should track all actions for security oversight and incident investigation.
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-kenya-green flex items-center justify-center text-white flex-shrink-0">✓</div>
                          <div>
                            <span className="font-medium">Scalability and resilience</span>
                            <p className="text-sm text-gray-600 mt-1">
                              Select technologies that can scale to handle large volumes of data while maintaining
                              security properties and operational resilience under high load.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="governance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Governance & Oversight</CardTitle>
                  <CardDescription>
                    Frameworks for ensuring appropriate use of social media monitoring systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Oversight Structure</h3>
                    <p className="mb-4">
                      A robust governance framework is essential to ensure systems are used appropriately and legally:
                    </p>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-kenya-green text-white p-3">
                        <h4 className="font-medium">Multi-Level Oversight Framework</h4>
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="border-b pb-3">
                          <h5 className="font-medium">Technical Operations Oversight</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li>Daily operational review of system activities</li>
                            <li>Technical compliance monitoring and reporting</li>
                            <li>Incident response coordination</li>
                            <li>System performance and security monitoring</li>
                          </ul>
                        </div>
                        
                        <div className="border-b pb-3">
                          <h5 className="font-medium">Legal & Policy Compliance</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li>Regular legal reviews of system operations</li>
                            <li>Policy compliance assessments</li>
                            <li>Privacy impact evaluations</li>
                            <li>Documentation of legal justification for activities</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium">Independent Review Board</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
                            <li>Periodic independent assessments of system use</li>
                            <li>Review of significant operational decisions</li>
                            <li>Evaluation of overall program effectiveness</li>
                            <li>Recommendations for policy or technical improvements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Policy Framework</h3>
                    <p className="mb-4">
                      Comprehensive policies must guide all aspects of system implementation and operation:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Usage Policies</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Clear definition of authorized use cases</li>
                          <li>Explicit prohibitions on misuse</li>
                          <li>Documentation requirements</li>
                          <li>Approval processes for sensitive operations</li>
                        </ul>
                      </div>
                      
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Data Handling</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Data classification guidelines</li>
                          <li>Retention and destruction schedules</li>
                          <li>Access control requirements</li>
                          <li>Data sharing limitations</li>
                        </ul>
                      </div>
                      
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Incident Response</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Security breach protocols</li>
                          <li>Misuse reporting procedures</li>
                          <li>Investigation requirements</li>
                          <li>Remediation processes</li>
                        </ul>
                      </div>
                      
                      <div className="border p-4 rounded-md">
                        <h4 className="font-medium mb-2">Accountability</h4>
                        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                          <li>Regular compliance auditing</li>
                          <li>Performance metrics and reporting</li>
                          <li>User activity reviews</li>
                          <li>Consequence management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                    <h4 className="font-semibold text-blue-800 mb-2">Critical Reminder</h4>
                    <p className="text-blue-700 text-sm">
                      All social media monitoring systems must balance security needs with respect for legal rights, 
                      privacy considerations, and democratic principles. Regular review of governance frameworks 
                      ensures this balance is maintained as technologies and threats evolve.
                    </p>
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

export default SoftwareGuidelines;
