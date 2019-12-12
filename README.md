# css-master

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
<!--

Course Summary
1-clip-path
2-background image with gradient in the same line
3-position absolute with transform to align center elements
4-Span element into h1 to play with sizes
5-CSS animations while page is loading with keyframes
6- backface-visibility: hidden
7- If I use :hover with name animation the animation will be play
8- ::before need content: "" always
9- Animation-fill-mode - aplica la transition definida en 0% en el keyframe
10-EM are measured relative to their parent font-size and REMS are measured for document's root - Both depends of font-size
11- Percentages area measured relative to their parent's width, if used to especify lenghts
12-Valores que son inherited, padre tiene font-size: 20px; line-height: 150%; (es decir el line-height es de 30px) - hijo toma esos 30px heredados
13-box-sizing: content-box (añade paddings y borders extra al ancho)  border-box (Acomoda border y anchos a elemento para que no supere ancho de padre)
14- Display: block (Vertically - 100% parent width - ) ~ inline-block (no line breaks - occupies only content's space a mix of block and inline - box-model applies as showed) ~ inline (Content is distributed in lines- occupies only content's space - no heights and widths - padding and margin only horizontal)
15- Think (Component driven design) - Build (BEM - .block__element--modifier{}) - Arquitect (7-1 pattern)
16- The diference between scss and sass format are the sign: { }
17- Lighten function in sass (lighten($color-secondary, 15%)) and darken function
18- Mixing, save a piece of code in a part, this is with @mixin name-mixing next @include name-mixing
Note: We can put a variable here for pass @mixin name-mixing($col){ color: $col} then we include @include name-mixing(@text-color-light)
19- %placeholder with that we could include code but the difference is that with placeholder we use @extend and the code is put no into block that I paste like mixing, is inverse the effect
20- command line - rm > remove - cp > copy a file -
21- npm init - npm install node-sass - package.json have depencecies-dev, when you receive a package you can use npm install to read package.json and install the dependencies that you need in your project
22- 7-1 CSS arquitecture with the next structure:
/sass
  /abstracts
  /base
  /componentes
  /layout
  /pages
23- basic responsive design principles:
    1- Fluid grids and layouts: Use % rather px - Float layouts - Flexbox - CSS GRID
    2- Flexible/Responsive Images
    3- Media Queries: To change styles on certain viewport widths

24- [class^="col-"] to select all the elements to begin with the class 'col-'' - class$="col-" to select classes that end in col-

25- how putas works this: width: calc(2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});

26--webkit-background-clip: text; to put gradient into a text
27- outline: 1.5rem solid $color-primary; - outline-offset: 2rem; to separate the border of the element
28- &:hover &__photo:not(:hover) {} this is to do something about elements that not have hover
29- transform: skewY(-7deg); to effect like girate the pic
30- Select the direct child & > * {  tranform:}

/////////////////////////////

Undertanding CSS3
!important have the highest priority, but only use as a last resource
Inoine styles will always have priority over styles in external stylesheets
A selector that containts 1 ID more specific than one with 1000 classes
A selector that contains 1 class is more specific than one with 1000 elements
The universal selector * has no specificity value (0,0,0,0)
Rely more on especificity than on the order of selectors
When using 3rd party stylesheets always put your author stylesheet last
CSS is ordered by: Importance - Specificity - Sourcer order

/////////////////////////////

CSS GRID
What is: new module that brings two dimensional grid system
- Replace float layouts, using less, and more readable logical css and html
- CSS grid works perfectly with Flexbox
- Changes completely the way that we build two dimensional layouts
Grid terminology:
Grid container - display:grid;
Column axix
Row axix
grid lines
gutter
Grid track Row - Grid track column

First exercice: Display grid - grid-template-rows/columns
Inspector Firefox
Fractional Unit + fr = Represent a fractions of the available space

Example with: grid-template-columns: 1fr 2fr 1fr;

grid-row - grid-column
implicit grids
FIRST METHOD:
 grid-column: 2 / -1; - Span-2  

Grid challenge

SECOND METHOD:
naming grids - grid-template-columns: repeat(3,[col-start] 1fr [col-end]) 200px [grid-end];
grid-column: col-start / grid-end;

THIRD METHOD:
grid-template-areas: "head head head head"

When I don't now how many rows we will have
Implicit - Explicit rows - Implicit: the part that is added without defined in html
grid-auto-rows: 80px; - grid-auto-columns: .5fr;
To increase in columns implicit: grid-auto-flow: column;

grid-auto-flow: row dense;

min max content: grid-template-rows: repeat(2, minmax(150px, min-content)); min-content and max-content
grid-template-columns: minmax(200px, 50%) repeat(3, 1fr);

grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));


GRID INSIDE GRIDS
SUBGRID -> a item now is a container

Align columns with parent grids?

When we use grid-row: 1 / -1; -1 is used to explicit grid, to implicit grid we use span 2

Responsive without mediaqueries
grid-template-colums: repeat(auto-fit, minmax(25rem, 1fr));

/////////////////////////////

FLEXBOX

 -->
