import ContentWrapper from "../../../ContentWrapper/ContentWrapper";
import Link from "next/link";

export default function Title() {
  return (
    <div>
      <ContentWrapper
        bgStyles={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 className="h1">Tree search</h1>
        <p className="lead mb-2">Quickly search for a word in a string.</p>
        <p className="small text-secondary mb-1">A project by David Joseph</p>
        <Link passHref href={"#working-example"}>
          <a className="small">View the demo here.</a>
        </Link>
      </ContentWrapper>
    </div>
  );
}
