import Aboutus from "@/components/Aboutus";
import ActiveProcess from "@/components/ActiveProcess";
import BlogPost from "@/components/BlogPost";
import FoodCategory from "@/components/FoodCategory";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import MeetOurChef from "@/components/MeetOurChef";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <div className="mx-auto">
    <Hero />
    <Aboutus />
    <FoodCategory />
    <WhyChooseUs />
    <Highlight />
    <Menu />
    <MeetOurChef />
    <Testimonials />
    <ActiveProcess />
    <BlogPost />
   </div>
  );
}
