import ContentWrapper from "../../../ContentWrapper/ContentWrapper";

export default function Footer() {
  return (
    <ContentWrapper containerClassName={`text-center small text-secondary`}>
      <p className="mb-0">&#169; David Joseph {new Date().getFullYear()}</p>
    </ContentWrapper>
  );
}
