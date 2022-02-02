# Tree search

Quickly search for a word in a string. View the demo [here](https://deej4y.github.io/dsa-tree-search#working-example)

A project by David Joseph

## Aim

To implement a word search for a given string of text.

## Objective

To implement a string searching algorithm using the Tree data structure. The user should be able to add a paragraph of text. This paragraph will be converted to a tree. The user should then be able to search for a word in the paragraph. The search must be done using the tree created from the paragraph.

## Algorithm

### _Converting the text string to Tree_

Traverse the string character by character.
If the character is the first character of the word, add it as a child of the root with value as the character. Add the index of the character to the locatedAt array of the child node. If a child node of root with the same character exists, just add the index to the locatedAt array.
For each child of the root node, jump to the index of the first character of each word and recursively add the remaining characters as child nodes to the starting character parent node. If repeating, add the index to the locatedAt property.

### _Searching the tree_

Using depth-first traversal, find every node that matches the first character of the query.
For next characters, recursively match the child nodes with the character to be found.
Solution
The tree data structure logic can be seen [here](https://github.com/DEEJ4Y/dsa-tree-search/blob/main/data_structures/tree.js). The source code for this project is on [Github](https://github.com/deej4y/dsa-tree-search).
