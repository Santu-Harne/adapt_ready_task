### Problem Statement

Design and implement systems to assist users interested in exploring Indian cuisine.

### Seed Data

Download the attached source data file - "indian_food.csv". The file contains data about various Indian dishes such as their ingredients, cooking time, origin, etc. Serve the data from a backend project or use it directly in the React single-page-application.

### Components

#### Dish Details:

-   Displays the following attributes of a given dish:
    -   name
    -   ingredients
    -   diet type (veg or non-veg)
    -   preperation time
    -   cooking time
    -   flavor
    -   course
    -   state
    -   region

#### Dishes List:

-   List all the dishes and their details in a tabular format.
-   Use pagination to limit the number of rows displayed at a time.
-   Enable sorting on a few relevant columns such as dish name, prep time, cooking time, etc.
-   Enable filtering on a few relevant columns such as diet, flavor, state, etc.
-   Navigation:
    -   Display "Dish Details" upon clicking the dish name in the table.

#### Dish Suggester:

-   User should be able to select all the ingredients they have with them
-   Based on the selection, the component should suggest all the dishes that are possible to be prepared using some or all of them.
-   For example, if the user selects "Rice flour", "coconut" and "jaggery" then only "Modak" and "Kajjikaya" are possible.
-   If the user now adds "banana" and "ghee" to the list of ingredients then "Unni Appam" and "Ariselu" are additionally possible to be prepared.

#### Header:

The header should contain a search box which should available on all the screens.
The user should be able to search for dishes by name, ingredients, origin using the auto-suggest feature as they type.
For example:

-   If the user starts typing "dosa" then suggestions such as "Dosa" and "Masala Dosa" should start showing up.
-   If the user starts typing "potato" then suggestions such as "Aloo tikki", "Samosa", etc., should start showing up.
-   If the user starts typing "Karnataka" then suggestions such as "Dharwad pedha" and, "Mysore pak" etc., should start showing up.
-   Clicking on any result should show up "Dish Details" of that dish.

### Minimum (mandatory) requirements

-   Create at least two or more "pages/screens" to organize the various components.  
    For example, there can be a homepage for various components and a route to display the "Dish Details".  
    Use React Router v6.
-   Use redux for state management.

### Bonus (non-mandatory) requirements

-   Use functional components with react hooks instead of class-based components.
-   Use Fluent UI React for UI components.
-   Assume that filter, sort, pagination and searching will be backend-driven and write front-end code accordingly. You may create dummy backend-endpoints and functions if not implementing an actual working backend.
-   Implement a JWT login flow.
-   Use browser storage to enable the user to resume their workflow after reload.
-   Use Typescript.
-   After completing the project, note down suggestions for features that can be added to the app.
-   Implement a few of the above features.

### Tips

-   Add useful comments in code.
-   You can use a toolchain such as 'Create React App' or configure a project on your own.

### Evaluation

-   The project will NOT be evaluated on the UI design and styling.
-   The project will be evaluated on its code quality.
-   In further rounds, you may be asked to enhance the project. Hence, writing scalable code is necessary.

### Submission

-   Create and share a link to a git repository on any git hosting service such as GitHub, GitLab, Bitbucket, etc.
-   Add a readme file with instructions for running the project.
