import Footer from "@/components/layouts/Main/Footer/Footer";
import Navbar from "@/components/layouts/Main/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="md:min-h-[50vh]">{children}</div>
      <Footer />
    </>
  );
}
