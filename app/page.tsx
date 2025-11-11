import Image from "next/image";
import MainSection from "@/components/MainSection";
import ContactForm from "@/components/ContactForm";
import ProjectsSection from "@/components/Projectsection";
export default function Home() {
  return (
    <>
      <MainSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}
