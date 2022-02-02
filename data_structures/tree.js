import isNotWhiteSpace from "../utils/isNotWhiteSpace";

class TreeNode {
  constructor(name, locatedAt) {
    this.name = name || "null";
    this.locatedAt = [locatedAt] || [];
    this.children = [];
    this.matchesQuery = false;
  }

  getValue = () => {
    return this.name;
  };

  addChild = (treeNode) => {
    this.children.push(treeNode);
  };

  addLocation = (location) => {
    this.locatedAt.push(location);
  };

  setChildren = (newChildren) => {
    this.children = newChildren;
  };

  searchChildren = (query, all) => {
    let matchingChildren = [
      ...this.children.filter((treeNode) => {
        if (treeNode.name === query && all) {
          treeNode.setMatchesQuery(true);
        }
        return treeNode.name === query;
      }),
    ];

    if (matchingChildren === [] || matchingChildren.length === 0) {
      return false;
    }

    return all ? matchingChildren : matchingChildren[0];
  };

  setMatchesQuery = (val) => {
    this.matchesQuery = val;
  };

  // Depth first traversal
  traverseNodes = ({ depth }) => {
    if (!depth) {
      depth = 1;
    }
    this.children.forEach((child) => {
      console.log(child.name, `depth: ${depth}`);

      child.traverseNodes({ depth: depth + 1 });
    });
  };

  matchQuery = (query, matches) => {
    this.children.forEach((child) => {
      if (query.startsWith(child.name)) {
        matches.push(child);
      }
      child.matchQuery(query, matches);
    });
  };

  matchQueryAll = (query, matches, depth) => {
    this.children.forEach((childNode) => {
      let results = childNode.searchChildren(query[depth], true);
      if (results) {
        results.forEach((child) => {
          matches.push(child);
          child.matchQueryAll(query, matches, depth + 1);
        });
      }
    });
  };

  containsChild = (childQuery) => {
    this.children.forEach((childNode) => {
      if (childNode === childQuery) {
        return true;
      } else {
        childNode.containsChild(childQuery);
      }
    });
    return false;
  };
}

class Tree {
  constructor(string) {
    this.root = new TreeNode(string, "root");
    this.generateFromString();
  }

  generateFromString = () => {
    let string = this.root.name;
    let stringArray = [...string];

    // First letter of each word non-repeating
    stringArray.forEach((character, idx) => {
      if (!isNotWhiteSpace(character)) {
      }
      // If alphanumeric
      else {
        // Special case for first character
        if (idx === 0) {
          this.root.addChild(new TreeNode(character, 0));
        }
        // For any other character
        else if (
          // check if previous character was a space (first letter of a word)
          stringArray[idx - 1] === " "
        ) {
          // Search children for node with same name
          let nodeWithSameValue = this.root.searchChildren(character);
          if (!nodeWithSameValue) {
            // If no matching children, add new node with name
            this.root.addChild(new TreeNode(character, idx));
          } else {
            // If matching child, add location to matching child
            nodeWithSameValue.addLocation(idx);
          }
        }
      }
    });

    this.addRemainingNodes();
  };

  addRemainingNodes = () => {
    this.root.children.forEach((child) => {
      this.addFollowingLettersToTree(child);
    });
  };

  addFollowingLettersToTree = (treeNode) => {
    let stringArray = [...this.root.name];
    treeNode.locatedAt.forEach((location) => {
      let nextCharacter = stringArray[location + 1];
      if (nextCharacter) {
        if (!isNotWhiteSpace(nextCharacter)) {
        } else {
          // Search children for node with same name
          let nodeWithSameValue = treeNode.searchChildren(nextCharacter);
          if (!nodeWithSameValue) {
            // If no matching children, add new node with name
            treeNode.addChild(new TreeNode(nextCharacter, location + 1));
          } else {
            // If matching child, add location to matching child
            nodeWithSameValue.addLocation(location + 1);
          }
        }
      }
    });

    treeNode.children.forEach((child) => {
      this.addFollowingLettersToTree(child);
    });
  };

  traverse = () => {
    let treeCopy = this;
    treeCopy.root.traverseNodes({ depth: 1 });
    return this;
  };

  searchString = (query) => {
    if (query.length === 1) {
      let treeCopy = new Tree(this.root.name, "results");
      let matches = [];
      treeCopy.root.matchQuery(query, matches);
      treeCopy.root.setChildren(matches);
      this.prevQueryResults = matches;
      return treeCopy;
    } else if (query.length > 1) {
      let treeCopy = new Tree(this.root.name, "results");
      let searchDepth = query.length - 1;
      let matches = [];
      treeCopy.root.setChildren(this.prevQueryResults);
      treeCopy.root.matchQuery(query[searchDepth], matches);
      this.prevQueryResults = matches;
      return treeCopy;
    }
    return this;
  };
}

export default Tree;
