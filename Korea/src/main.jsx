// import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";

const element = (
  <>
    <h1>Nasza stron!</h1>
    <main>
      <Link text="Google" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro
        ut nam delectus tempora, omnis consequatur, in, sequi suscipit culpa
        quibusdam dolores aperiam facere magnam iusto libero veniam laboriosam
        esse.
      </p>
    </main>
    <Link shouldOpenNewTab={false} />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
