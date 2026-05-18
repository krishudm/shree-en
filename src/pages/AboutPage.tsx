// ✅ Mobile Optimization ONLY (no logic/content changes)

import { PageShell } from "@/components/site/PageShell";
import { About } from "@/components/site/About";

const AboutPage = () => (
  <div className="px-4 sm:px-6 ">
    <PageShell
      eyebrow="About us"
      title="About Shree Enterprise"
      // description="With over 45 years of experience, we are the leading distributor of water pumps, cables, and pipes in Madhya Pradesh. Our commitment to quality, reliability, and customer satisfaction has made us the go-to choice for residential, commercial, and agricultural needs across the state."
    >
      <About />
    </PageShell>
  </div>
);

export default AboutPage;
