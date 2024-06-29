import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { getData } from "@/lib/serverUtils";
import { ModeToggle } from "../toogle-button-darkMode";


export default async function Navbar() {
  const data = await getData();

  return (
    <header className="fixed top-0 z-50 w-full shadow-sm flex h-16 items-center justify-between px-4 md:px-6 ">
      <div className="container max-w-5xl mx-auto flex h-18 items-center justify-between py-2 px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          <div className='text-2xl text-[#ce7e00] font-bold underline underline-offset-8 decoration-green-500 -rotate-6'>Gautam 👨🏻‍💻 </div>
        </Link>
        <nav className="hidden space-x-4 lg:flex items-center">
          {data.visual.navbar.links.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="text-sm transition-colors text-[#8A8A8A] font-bold hover:text-primary dark:hover:text-[#23C55F] dark:text-white-800"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            {/* Resume Btn */}
            <Link href="assets/Gautam Kumar Resume.pdf" download="Gautam Kumar Resume" target="_blank" className="text-sm transition-colors text-[#23C55F] font-bold hover:text-primary dark:hover:text-[#23C55F]">
              <p className="w-[150px] border-[2px] border-solid border-green-200 px-5 py-3 bg-dark-100 rounded-[30px] scale-[.90] hover:scale-[.95] transition-all">Resume 📜</p>
            </Link>
            {/* Mode Toggle Dark Mode */}
            <ModeToggle />
          </div>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              {data.visual.navbar.links.map((item) => (
                <Link
                  href={item.path}
                  key={item.path}
                  className="text-sm transition-colors text-[#8A8A8A] font-bold hover:text-primary dark:hover:text-[#23C55F]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
            {/* Resume Btn */}
            <Link href="assets/Gautam Kumar Resume.pdf" download="Gautam Kumar Resume" target="_blank" className="text-sm transition-colors text-[#23C55F] font-bold hover:text-primary dark:hover:text-[#23C55F]">
              <p className="w-[150px] border-[2px] border-solid border-green-200 px-5 py-3 bg-dark-100 rounded-[30px] scale-[.90] hover:scale-[.95] transition-all">Resume 📜</p>
            </Link>
            {/* Mode Toggle Dark Mode */}
            <ModeToggle />
          </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
