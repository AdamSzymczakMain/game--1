const address = "https://google.pl/";

export function Link({ href = address, text = address, shouldOpenNewTab }) {
  const target = shouldOpenNewTab ? "_blank" : "";
  const rel = shouldOpenNewTab ? "noopener noreferrer" : "";
  return (
    <a href={href} target={target} rel={rel}>
      {text}
    </a>
  );
}
