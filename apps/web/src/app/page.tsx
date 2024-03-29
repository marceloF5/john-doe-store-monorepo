import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
} from "ds";
import { Metadata } from "next";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="w-auto px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-6xl font-extrabold tracking-tight text-center text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="block px-2 text-transparent from-brandred to-brandblue bg-gradient-to-r bg-clip-text">
            Turborepo Example
          </span>
        </h1>
        <div className="max-w-xl mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <Button>Example</Button>
          <Button variant="ghost">Example</Button>
          <Button variant="destructive">Example</Button>
          <Button variant="link">Example</Button>
          <Button variant="secondary">Example</Button>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-12 place-content-evenly sm:grid-cols-3">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title} {...card}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.title}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <Button asChild variant="destructive">
                  <a href={card.href}>{card.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Checkbox />
      </main>
    </div>
  );
}
