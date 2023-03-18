import { Links, Bar } from "./styles.js";

export default function Link({ url, children, bar = true }) {
  return (
    <>
      <Links href={url}>
        {children}
        {bar === false ? false : <Bar></Bar>}
      </Links>
    </>
  );
}
