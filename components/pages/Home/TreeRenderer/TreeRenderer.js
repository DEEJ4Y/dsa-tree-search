import { useContext } from "react";
import ContentWrapper from "../../../ContentWrapper/ContentWrapper";
import { ParagraphContext } from "../../../providers/paragraph";
import { QueryContext } from "../../../providers/query";
import TreeNode from "./TreeNode/TreeNode";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function TreeRenderer() {
  const paragraphContext = useContext(ParagraphContext);
  const searchOptimizedTree = paragraphContext.tree;

  const queryContext = useContext(QueryContext);

  let filteredTree;
  filteredTree = searchOptimizedTree.searchString(queryContext.value);

  const highlightedIndexes = [];
  filteredTree.root.children.forEach((matchingNode) => {
    highlightedIndexes.push(...matchingNode.locatedAt);
  });
  // console.log(filteredTree, searchOptimizedTree);
  return (
    <ContentWrapper bgClassName={`pt-0 bg-white`}>
      <div className="py-3 font-monospace">
        {[...paragraphContext.value].map((element, idx) => {
          return (
            <span
              key={idx}
              className={
                queryContext.value.length > 0 &&
                highlightedIndexes.includes(idx)
                  ? `bg-dark text-white`
                  : ``
              }
            >
              {element}
            </span>
          );
        })}
      </div>
      <div className="py-3">
        <Tabs className="d-flex justify-content-center font-monospace">
          <Tab
            eventKey={"root"}
            title={queryContext.value.length > 0 ? "results" : "root"}
          >
            <TreeNode node={filteredTree.root} />
          </Tab>
        </Tabs>
      </div>
      <p className="text-info">The above characters are clickable.</p>
      <p>
        The above section contains a visual representation of the tree that is
        created from the paragraph. If a query is being made, the branches of
        the tree that match the query are displayed instead of the entire tree.
        If there is no paragraph, it will show null.
      </p>
      <p>
        Each character represents a node in the tree. The root of the tree is at
        the top and its children below it. The depth of the tree is also
        visible.
      </p>
      <p>Each branch of the root node represents a word in the paragraph.</p>
      {/* <code>{JSON.stringify(filteredTree)}</code> */}
    </ContentWrapper>
  );
}
