
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InfoSection } from "@/components/InfoSection";
import { CaseStudies } from "@/components/CaseStudies";
import { PoliciesSection } from "@/components/PoliciesSection";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <InfoSection />
      <CaseStudies />
      <PoliciesSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
