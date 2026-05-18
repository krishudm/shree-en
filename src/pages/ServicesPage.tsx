import { PageShell } from "@/components/site/PageShell";
import { Services } from "@/components/site/Services";

const ServicesPage = () => (
  <PageShell
    eyebrow="Our services"
    title={
      <>
        End-to-end <em className="text-primary not-italic">pump solutions</em> for every requirement.
      </>
    }
    intro="From residential booster pumps to industrial-scale water transfer systems — and every installation, repair and AMC in between."
  >
    <Services />
  </PageShell>
);

export default ServicesPage;
