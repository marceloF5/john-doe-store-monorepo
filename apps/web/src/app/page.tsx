import { Metadata } from "next";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "ds";

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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Web
          <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text px-2 text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button>Example button</Button>
        </div>

        <div className="mt-12 grid grid-cols-1 place-content-evenly gap-4 sm:grid-cols-3">
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
      </main>
    </div>
  );
}
