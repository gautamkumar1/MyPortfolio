
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { IconCloudDemo } from "@/components/magicui/skill";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


export default async function Home() {
  const data = await getData();
  // console.log(data);

  return (
    <main>

      {/* Banner Section */}
      <section id="home" className="container max-w-5xl mx-auto py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src="/assets/profile-pic.png"
              width={280}
              height={280}
              alt="Developer"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full border"
            />
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">
                Hey 👋, I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <div className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">
              <TextGenerateEffect words={data.personalInfo.bio} />
            </div>
            <div className="space-x-4">
              <Link
                target="_blank"
                href={data.contactInfo.github}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                target="_blank"
                href={data.contactInfo.twitter}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link
                target="_blank"
                href={data.contactInfo.linkedin}
                prefetch={false}
              >
                <Button variant="secondary" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>

              <Link href={`mailto:${data.contactInfo.email}`}>
                <Button variant="secondary" size="icon">
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Button>
              </Link>

            </div>
          </div>
        </div>
      </section>
      {/* Skill Section */}
      <section className="h-screen flex  justify-center  items-center" id="skills">
        <div className='text-3xl text-white text-center font-bold underline underline-offset-8 decoration-green-500 -rotate-6'>
          Skills 📑
          <IconCloudDemo />
        </div>

      </section>
      <section
        id="skills"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-4xl mb-12 underline underline-offset-8 decoration-green-500 -rotate-3">
          Technologies and Tools 📚
        </h2>
        <div className="relative pl-6 grid gap-10">
          {/* Language */}
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold">Languages : </h3>
            {data.skills.languages.map((language, index) => (
              <Badge key={index} variant="secondary">
                {language}
              </Badge>
            ))}
          </div>
          {/* Frameworks and Libraries */}
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold">Frameworks & Libraries : </h3>
            {data.skills.frameworks.map((framework, index) => (
              <Badge key={index} variant="secondary">
                {framework}
              </Badge>
            ))}
          </div>
          {/* Databases */}
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold">Databases : </h3>
            {data.skills.databases.map((database, index) => (
              <Badge key={index} variant="secondary">
                {database}
              </Badge>
            ))}
          </div>
          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            <h3 className="font-bold">Tools : </h3>
            {data.skills.tools.map((tool, index) => (
              <Badge key={index} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >

        <h2 className="font-bold text-3xl md:text-4xl mb-12 underline underline-offset-8 decoration-green-500 -rotate-2">My Projects 🚀</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 p-2 flex items-center">
                <Image
                  src={project.cover}
                  alt="Project 1"
                  height={200}
                  width={300}
                  className="rounded-md object-cover"
                />
              </div>

              <div className="w-full lg:w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link
                      target="_blank"
                      href={project.live_url}
                      prefetch={false}
                    >
                      <Button size="sm">
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link
                      target="_blank"
                      href={project.code_repo_url}
                      prefetch={false}
                    >
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-4xl mb-12 underline underline-offset-8 decoration-green-500 -rotate-3">
          Work Experience 🧰
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  target="_blank"
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-4xl mb-12 underline underline-offset-8 decoration-green-500 -rotate-2">Education 👨🏻‍🎓</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}

      <section
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        id="contact"
      >
        <h2 className="font-bold text-3xl md:text-4xl mb-12 underline underline-offset-8 decoration-green-500 -rotate-2">Contact US 📞</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <form action="https://formsubmit.co/gautamraaz936@gmail.com" method="POST" >
            {/* Full Name */}
            <Label htmlFor="fullName">Full Name</Label>
            <Input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
            {/* Email */}
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" placeholder="Email" />
            {/* Message */}
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Type your message here." />
            <br />
            <Button>Send message</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
