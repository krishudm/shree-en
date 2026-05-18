import { PageShell } from "@/components/site/PageShell";
import { Contact } from "@/components/site/Contact";

const ContactPage = () => (
  <PageShell
    eyebrow="Get in touch"
    title={
      <>
        Let's power your <em className="text-primary not-italic">next project</em>.
      </>
    }
    intro="Visit our Indore showroom, call directly or write to us — our team responds the same working day."
  >
    <Contact />
  </PageShell>
);

export default ContactPage;
