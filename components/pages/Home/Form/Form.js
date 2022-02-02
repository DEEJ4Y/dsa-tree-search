import { useContext } from "react";
import Form from "react-bootstrap/Form";
import ContentWrapper from "../../../ContentWrapper/ContentWrapper";
import { ParagraphContext } from "../../../providers/paragraph";
import { QueryContext } from "../../../providers/query";

export default function ParagraphForm() {
  const paragraphContext = useContext(ParagraphContext);
  const paragraphValue = paragraphContext.value;
  const updateParagraph = paragraphContext.updateParagraph;

  const queryContext = useContext(QueryContext);
  const queryValue = queryContext.value;
  const updateQuery = queryContext.updateQuery;

  return (
    <ContentWrapper bgClassName={`bg-white pb-0`}>
      <h2 id="working-example" className="mb-3">
        Working example
      </h2>
      <Form.Group className="mb-3">
        <Form.Label>Your paragraph</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={paragraphValue}
          placeholder="Add some text to be searched"
          onChange={(e) => {
            updateParagraph(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Query for a word in the paragraph"
          value={queryValue}
          onChange={(e) => {
            updateQuery(e.target.value);
          }}
        />
      </Form.Group>
    </ContentWrapper>
  );
}
