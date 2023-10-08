import Courses from "@/components/Courses/Index";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stuffs from "@/components/Stuffs";

const data = [
  
];
export default function Home() {
 
  return (
    <main>
      <Header />
      <Hero />
      <Courses />
      <Stuffs />
    </main>
  );
}
