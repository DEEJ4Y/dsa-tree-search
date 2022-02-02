import { createContext, useState } from "react";
import Tree from "../../data_structures/tree";

export const ParagraphContext = createContext();

let sampleParagraph =
  "The fog was as thick as pea soup. This was a problem. Gary was driving but couldn't see a thing in front of him. He knew he should stop, but the road was narrow so if he did, it would be right in the center of the road. He was sure that another car would end up rear-ending him, so he continued forward despite the lack of visibility. This was an unwise move.";

const ParagraphContextProvider = (props) => {
  const [state, setState] = useState({
    value: sampleParagraph,
    tree: new Tree(sampleParagraph),
  });

  const updateParagraph = (newValue) => {
    let newTree = new Tree(newValue);
    setState(() => {
      return {
        ...state,
        value: newValue,
        tree: newTree,
      };
    });
  };

  return (
    <ParagraphContext.Provider
      value={{ ...state, updateParagraph: updateParagraph }}
    >
      {props.children}
    </ParagraphContext.Provider>
  );
};

export default ParagraphContextProvider;
