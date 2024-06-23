
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { getData } from "@/lib/serverUtils";
import { JSX, SVGProps } from "react";

interface MenuIconProps extends SVGProps<SVGSVGElement> {}

function MenuIcon(props: MenuIconProps) {
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

interface MountainIconProps extends SVGProps<SVGSVGElement> {}

function MountainIcon(props: MountainIconProps) {
  return <></>;
}

export default async function Header() {
  const data = await getData();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-2xl text-black font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
            AceMock AI 🤖
          </span>
        </Link>
        <nav className="hidden space-x-4 lg:flex items-center">
          {data.visual.navbar.links.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="text-sm transition-colors text-white-800 font-bold hover:text-primary dark:hover:text-[#23C55F]"
            >
              {item.label}
            </Link>
          ))}
          {/* Resume Btn */}
          <Link href="assets/Gautam Kumar Resume.pdf" download="Gautam Kumar Resume" target="_blank">
            <button
              className="cursor-pointer flex items-center justify-center bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
              <span className="flex items-center">
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 animate-bounce"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
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
                  className="text-sm transition-colors text-white-800 font-bold hover:text-primary dark:hover:text-[#23C55F]"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}
              {/* Resume Btn */}
              <a href="/public/assets/Gautam Kumar Resume.pdf" download="Gautam Kumar Resume" target="_blank" onClick={handleLinkClick}>
                <button className="cursor-pointer flex items-center justify-center bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
                  <span className="flex items-center">
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 animate-bounce"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      ></path>
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
