import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyH4,
} from "@/components/Typography";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="big-container">
        <h1>Welcome to rishabs app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          rem illum tempore, dolores delectus perspiciatis, ipsum deserunt,
          sapiente repellat iste facilis porro eveniet beatae ullam officia nam
          pariatur nihil ab?
        </p>
        <TypographyH1>Welcome to Rishab App</TypographyH1>
        <TypographyH2>Hello world</TypographyH2>
        <TypographyH3>Hello world</TypographyH3>
        <TypographyH4>Hello world</TypographyH4>
        <TypographyP>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempore nemo, quia vel iste totam, animi odit ducimus vitae quod
          voluptate accusantium delectus, in atque explicabo? Sit veritatis
          incidunt reiciendis?
        </TypographyP>
        <TypographyP>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempore nemo, quia vel iste totam, animi odit ducimus vitae quod
          voluptate accusantium delectus, in atque explicabo? Sit veritatis
          incidunt reiciendis? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio tempore nemo, quia vel iste totam, animi
          odit ducimus vitae quod voluptate accusantium delectus, in atque
          explicabo? Sit veritatis incidunt reiciendis? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Distinctio tempore nemo, quia vel
          iste totam, animi odit ducimus vitae quod voluptate accusantium
          delectus, in atque explicabo? Sit veritatis incidunt reiciendis?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempore nemo, quia vel iste totam, animi odit ducimus vitae quod
          voluptate accusantium delectus, in atque explicabo? Sit veritatis
          incidunt reiciendis?
        </TypographyP>
        <TypographyP>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          tempore nemo, quia vel iste totam, animi odit ducimus vitae quod
          voluptate accusantium delectus, in atque explicabo? Sit veritatis
          incidunt reiciendis?
        </TypographyP>
        <Button variant="outline">Button</Button>
      </div>
    </>
  );
}
