import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import HomePage from "./(home)/page";

export default function Home() {
  return (
    <div className="font-sans grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex-1 w-full">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
