import { PageShell } from "@/components/site/PageShell";
import { Portfolio } from "@/components/site/Portfolio";

const ProductsPage = () => (
  <PageShell
    eyebrow="Product Range"
    title={
      <>
        A complete portfolio for{" "}
        <em className="text-primary not-italic">every application</em>.
      </>
    }
    intro="Explore our full range of pumps engineered for agriculture, buildings, solar, residential and waste water solutions."
  >
    <Portfolio />
  </PageShell>
);

export default ProductsPage;
