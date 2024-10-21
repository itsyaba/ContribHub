import { Star } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6">
          What Our Users Say
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Discover how ContribHub has helped developers around the world contribute to open-source
          projects and grow their skills.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Alex Johnson"
            role="Frontend Developer"
            company="TechCorp"
            testimonial="ContribHub made it incredibly easy for me to find projects that match my skills. I've contributed to 5 different open-source projects in just a month!"
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Samantha Lee"
            role="Full Stack Developer"
            company="StartupX"
            testimonial="The community on ContribHub is amazing. I've learned so much from other contributors and maintainers. It's not just about code, it's about growing together."
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Michael Chen"
            role="Data Scientist"
            company="AI Innovations"
            testimonial="As someone new to open-source, ContribHub's learning resources and quick start templates were invaluable. I went from novice to confident contributor in weeks."
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="UX Designer"
            company="DesignHub"
            testimonial="I love how ContribHub isn't just for coders. I've found great projects where I can contribute my UX skills and make a real impact on user experiences."
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="David Kim"
            role="Backend Developer"
            company="CloudSystems"
            testimonial="The project matching algorithm is spot-on. Every project suggestion feels tailored to my skills and interests. It's like ContribHub really understands me as a developer."
            avatar="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Laura Müller"
            role="DevOps Engineer"
            company="TechOps Solutions"
            testimonial="ContribHub has been a game-changer for my career. The skills I've gained and the connections I've made have opened up so many new opportunities."
            avatar="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  avatar,
}: {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}) {
  return (
    <Card className="flex flex-col justify-between bg-black text-white">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="w-12 h-12 ">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{testimonial}</p>
      </CardContent>
    </Card>
  );
}
