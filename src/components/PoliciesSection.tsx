
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

export function PoliciesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Policy Framework Guidelines</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Developing comprehensive policies for managing social media risks in military contexts.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Alert className="bg-kenya-red/10 border-kenya-red mb-8">
            <AlertTriangle className="h-4 w-4 text-kenya-red" />
            <AlertTitle>Educational Content Only</AlertTitle>
            <AlertDescription>
              These guidelines are for educational purposes and should be adapted to specific organizational requirements and legal frameworks.
            </AlertDescription>
          </Alert>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Personnel Social Media Guidance</AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3">
                <p>Establish clear guidelines for military personnel regarding social media usage:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prohibit sharing of operational details including locations, timing, personnel counts, or equipment</li>
                  <li>Require review of personal photos before posting to ensure no sensitive information is visible</li>
                  <li>Mandate regular security settings reviews on personal accounts</li>
                  <li>Establish cooling periods for information release following operations</li>
                  <li>Develop clear reporting channels for potential security breaches</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Monitoring & Response Protocols</AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3">
                <p>Implement structured monitoring and response systems:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Establish dedicated teams for monitoring social media for operational security threats</li>
                  <li>Create rapid response protocols for addressing information leaks</li>
                  <li>Develop relationships with platform providers for urgent security requests</li>
                  <li>Implement routine scanning for sensitive information related to operations</li>
                  <li>Create escalation pathways based on threat severity</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Training Requirements</AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3">
                <p>Establish comprehensive education programs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mandatory social media security training for all personnel</li>
                  <li>Specialized training for command staff on digital threat assessment</li>
                  <li>Regular refresher courses to address evolving threats</li>
                  <li>Scenario-based training simulating actual social media security incidents</li>
                  <li>Family awareness programs for military households</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Technical Safeguards</AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3">
                <p>Implement technical solutions to enhance protection:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Metadata scrubbing tools for approved content release</li>
                  <li>Secure communications platforms for operational discussions</li>
                  <li>Automated scanning for potential information leaks</li>
                  <li>Geofencing applications for high-security areas</li>
                  <li>Digital signature systems for verified communications</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Media Relations Framework</AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-3">
                <p>Develop structured media engagement guidelines:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clear channels for official information release</li>
                  <li>Pre-approved messaging templates for various scenarios</li>
                  <li>Designated media liaisons with appropriate training</li>
                  <li>Regular engagement with media organizations on security considerations</li>
                  <li>Rapid fact-checking and correction protocols for misinformation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
