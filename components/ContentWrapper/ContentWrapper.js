import Container from "react-bootstrap/Container";

export default function ContentWrapper({
  children,
  bgClassName,
  bgStyles,
  containerClassName,
  containerStyles,
}) {
  return (
    <div
      style={{ ...bgStyles }}
      className={`bg-light py-5 px-3 ${bgClassName}`}
    >
      <Container
        fluid
        style={{ maxWidth: "1200px", ...containerStyles }}
        className={`${containerClassName}`}
      >
        {children}
      </Container>
    </div>
  );
}
