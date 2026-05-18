import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import SolutionDetailPage from "./pages/SolutionDetailPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import ClientsPage from "./pages/ClientsPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/solutions/:slug/:productSlug" element={<ProductDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
