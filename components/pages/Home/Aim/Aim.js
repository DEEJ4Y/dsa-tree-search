import Link from "next/link";
import ContentWrapper from "../../../ContentWrapper/ContentWrapper";

export default function Aim() {
  return (
    <div>
      <ContentWrapper bgClassName={`bg-white`}>
        <h2>Aim</h2>
        <p>To implement a word search for a given string of text.</p>

        <h2>Objective</h2>
        <p>
          To implement a string searching algorithm using the Tree data
          structure. The user should be able to add a paragraph of text. This
          paragraph will be converted to a tree. The user should then be able to
          search for a word in the paragraph. The search must be done using the
          tree created from the paragraph.
        </p>

        <h2>Algorithm</h2>
        <p className="lead">Converting the text string to Tree</p>
        <ul>
          <li>Traverse the string character by character.</li>
          <li>
            If the character is the first character of the word, add it as a
            child of the root with value as the character. Add the index of the
            character to the locatedAt array of the child node. If a child node
            of root with the same character exists, just add the index to the
            locatedAt array.
          </li>
          <li>
            For each child of the root node, jump to the index of the first
            character of each word and recursively add the remaining characters
            as child nodes to the starting character parent node. If repeating,
            add the index to the locatedAt property.
          </li>
        </ul>
        <p className="lead">Searching the tree</p>
        <ul>
          <li>
            Using depth-first traversal, find every node that matches the first
            character of the query.
          </li>
          <li>
            For next characters, recursively match the child nodes with the
            character to be found.
          </li>
        </ul>
      </ContentWrapper>
      <ContentWrapper>
        <h2>Solution</h2>
        <p className="mb-0">
          The tree data structure logic can be seen{" "}
          <Link passHref href={"/"}>
            <a>here</a>
          </Link>
          . The source code for this project is on{" "}
          <Link passHref href={"https://deej4y.github.io/deej4y"}>
            <a>Github</a>
          </Link>
          .
        </p>
      </ContentWrapper>
    </div>
  );
}
