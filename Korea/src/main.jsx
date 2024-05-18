// import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";
import { HeadingItalic } from "./components/Headingitalic";
import { Logger } from "./components/Logger";

const element = (
  <>
    <Logger>
      <HeadingItalic>Google super stron!</HeadingItalic>
    </Logger>
    <main>
      <Link text="Google" shouldOpenNewTab={true} />
      <Logger>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          porro ut nam delectus tempora, omnis consequatur, in, sequi suscipit
          culpa quibusdam dolores aperiam facere magnam iusto libero veniam
          laboriosam esse.
        </p>
      </Logger>
    </main>
    <Link shouldOpenNewTab={false} />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
