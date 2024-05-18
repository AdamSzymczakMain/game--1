export function Logger(props) {
  const date = new Date();
  console.log(
    `Komponent stworzony o ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}`
  );
  return <>{props.children}</>;
}
