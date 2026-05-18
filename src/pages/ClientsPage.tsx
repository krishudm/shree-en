import { PageShell } from "@/components/site/PageShell";
import { Testimonials } from "@/components/site/Testimonials";

const ClientsPage = () => (
  <PageShell
    eyebrow="Our clients"
    title={
      <>
        Trusted by <em className="text-primary not-italic">farmers, builders</em> and industries.
      </>
    }
    intro="Three generations of customers across Madhya Pradesh — from individual homeowners to large municipal water authorities."
  >
    <Testimonials />
  </PageShell>
);

export default ClientsPage;
