# Component Test

This project was bootstrapped with Vite's React Typescript template.

## Available Scripts

First, ensure you are using version 16.20.2 of node or higher. In the terminal, navigate to the root of the project directory and run:

#### `npm i` or `npm install`

Once the node modules are installed, you can run:

#### `npm run dev`

which will run the app in the development mode. From there, you can open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The command:

#### `npm run test`

will run all of the test files in the test directory.

## Notes

### Assumptions

While the listed requirements for this project were thorough, there were some options left to my interpretation. Here I will outline some of those assumptions and how they factored in to my implementation:

- The mock data set included items that had a status of either "scheduled" or "available". I assumed this value was static/immutable and that any selected item with a status of scheduled would not be downloadable. Thus, I did not believe selecting a checkbox would change the status of any item.
- Further to the above point, I questioned if items with a scheduled status were able to be downloaded as my initial assumption was that those would be unselectable options. I asked for clarification and was told that "all items are selectable" and that "your alert box should indicate to the user what is being downloaded - available items vs. processing items". I configured the alert modal with a note to let a user know that any selected items with a status of scheduled was currently processing and unavailable for download.
- I also assumed that the Download Selected button should only be available if at least one item is selected. I have added a condition to disable the button based on the amount of selected items, and the icon changes color (fill) from gray to black when at least one item is selected.

### Reusability

My main goal for this project was to make as many of the components reusable as possible. I believe I succeeded in creating a checkbox component that could be used for both bi and tri-states (true, false, indeterminant). If given more time, I would attempt to refactor my list-entry component so that it could be re-used in the alert component. Similarly, I would attempt to refactor the category headings into it's own component which would hopefully be usable in the alert component as well.

### Accessibility

While I tried to include labels for the checkboxes, I do know that there could be much more added with respect to improving accessibility of the components and project overall. While I added aria-labels to the button elements, I was unable to verify if I could navigate (tab) on to them via my keyboard. With more time investment, this would be another point of focus.

### Styling

For the sake of efficiency, I opted to use SASS as opposed to implementing any styling frameworks/libraries. I tried to follow the [BEM](http://getbem.com/) naming convention to keep the styling fairly organized.

### Additional Considersations

#### Leveraging Libraries

Given that the goal of this project was to build some modular components, I opted not to use any libraries. Given more time, I would have considered using TailwindCSS to help establish styling that would make the components more easily reusable, as opposed to the custom styling definitions I created.

#### Larger Data Sets

One remaining consideration is evaluating how this project would handle a much larger data set. While not implemented, I think it would be useful to evaluate the need for either pagination or lazy-loading depending on the intended UX of the component. This may also require updating how the state of the application is managed.
