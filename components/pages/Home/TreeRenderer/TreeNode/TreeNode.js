import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function TreeNode({ node }) {
  return (
    <Tabs
      className="d-flex justify-content-center font-monospace"
      variant="tabs"
    >
      {node.children.map((child, idx) => {
        return (
          <Tab
            key={`${child.name}-${idx}`}
            eventKey={`${child.name}-${idx}`}
            title={child.name}
            tabClassName={
              child.matchesQuery === true ? `border-success text-success` : ``
            }
          >
            {child.children.length > 0 ? <TreeNode node={child} /> : ""}
          </Tab>
        );
      })}
    </Tabs>
  );
}
