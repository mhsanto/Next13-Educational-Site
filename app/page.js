import Courses from "@/components/Courses/Index";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Notice from "@/components/Notice";
import Stuffs from "@/components/Stuffs";

const data = [];
export default function Home() {
  return (
    <main>
      <Notice />
      <Hero />
      <Courses />
      <Stuffs />
    </main>
  );
}
