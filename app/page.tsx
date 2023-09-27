import { LoginButton } from "@/components/general/auth";
import Navbar from "@/components/general/Navbar";
import { AnimationRobot } from "@/components/general/animation";

export default async function Home() {
  return (
    <main>
      <Navbar />

      <section className="md:mt-10 mt-20  max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="text-center md:text-start px-4 flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-primary mb-10 relative">
            EnglishKuy
          </h1>
          <p className="pr-10 text-secondary-foreground mb-6 font-semibold">
            Boost your English language skills quickly and easily with our app!
            Gain access to interactive courses and enjoyable exercises. Start
            your journey to English proficiency now!
          </p>
          <div className="">
            <LoginButton />
          </div>
        </div>
        <div className=" flex justify-center">
          <AnimationRobot />
        </div>
      </section>
    </main>
  );
}
