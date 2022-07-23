/*jshint esversion:8*/

const TTIX = require('./index');

//console.log(TTIX);

const main = TTIX.Stage_Manager.Factory.stage({
    name: `Main_Stage`
});
const main_section = main.section(`main`);

const main_grid = main_section.grid();

const main_frame = TTIX.Stage_Manager.Factory.frame({ name: `Main_Frame` });
main_grid.add_row([
    { comp: main_frame }
]);

console.log(main);
console.log(main_section);


//IDEA:
//// STAGE:
////    - sections = pages
////        - grid = table or screen distribution per section
////            - rows = can include anothers grids to distribute components or elements by cols
////                - frames as cols = Frames are components or elements containers to render
