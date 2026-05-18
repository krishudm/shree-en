// ✅ Mobile Optimization ONLY (no logic/content changes)

import { PageShell } from "@/components/site/PageShell";
import { About } from "@/components/site/About";

const AboutPage = () => (
  <div className="px-4 sm:px-6">
    <PageShell
      eyebrow="About us"
      title={
        <span className="block text-2xl sm:text-3xl md:text-4xl leading-tight">
          Four decades of{" "}
          <em className="text-primary not-italic">trusted distribution</em>.
        </span>
      }
      intro="Founded in 1978 by Mr. Ramshchandra Rathi, Shree Enterprise has grown into one of Madhya Pradesh's most trusted names in pumps, electrical equipment and pipes."
    >
      <About />
    </PageShell>
  </div>
);

export default AboutPage;
