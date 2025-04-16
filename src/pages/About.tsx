
import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About Shield Operations</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Shield Operations is an educational initiative focused on addressing the critical challenges that social media and political interference pose to military operations globally.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide educational resources, analysis, and frameworks that help military personnel, policymakers, and the public understand the complex relationships between digital media, politics, and national security operations.
              </p>
              
              <h2>The Challenge</h2>
              <p>
                As modern military and security organizations recognize, unregulated social media and political interference in military operations pose significant threats to national security and stability. The rapid spread of information—both accurate and inaccurate—can compromise operations, endanger personnel, and undermine strategic objectives.
              </p>
              
              <h2>Our Approach</h2>
              <p>
                We take a balanced, educational approach that respects both security imperatives and democratic values. We believe that solutions must be found through:
              </p>
              
              <ul>
                <li>Education and awareness programs</li>
                <li>Policy development that balances security and freedom</li>
                <li>Technical frameworks for monitoring and response</li>
                <li>International cooperation and shared best practices</li>
                <li>Engagement with technology platforms and media organizations</li>
              </ul>
              
              <h2>Our Team</h2>
              <p>
                Our organization brings together experts in military operations, cybersecurity, media studies, and policy development. This multidisciplinary approach ensures comprehensive analysis and practical solutions.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
                <h3 className="text-xl font-bold mb-4">Important Disclaimer</h3>
                <p className="mb-0">
                  This website is purely educational and informational. We do not develop or deploy technologies to block, censor, or manipulate social media platforms. Our goal is to foster understanding and responsible practices that protect national interests while respecting democratic principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
