# Full-Stack Coding Task: Carbon Emissions Dashboard

## Objective

Create a web application that shows carbon emissions by sector and by country.

> Recommendation of open API to get this information from would be [the world bank climate data API](https://data.worldbank.org/).

## Acceptance Criteria
* As a user I can see a table of emissions sorted descending and defaulting to a clearly indicated industry if none is chosen;
* As a user I can filter by industry - minimum 2 industries;
* [Bonus] As a user I can compare two countries emissions (preferable in a line chart);
* [Bonus] As a user I can avoid scrolling too far into the bottom of the table to trigger certain actions (this can be done with sticky columns and/or pagination to avoid long scrolls).

## Code Quality Focus Areas

1. Architecture: Demonstrate a clear separation of concerns between data fetching, processing, and presentation - minimally showcasing some design patterns and architectural patterns like the simple layered architecture (Controller, Service and Repository;
2. Performance (ideally backend strategies to reduce round trips or saving on external API calls);
3. Error Handling and observability (good logging practices and proper communication of errors client side);
4. Testable code - some core functionality should be tested as well.

* Backend: Implement comprehensive error handling, including input validation, API error handling, and appropriate HTTP status codes.
* Frontend: Display user-friendly error messages and handle loading states.

## Documentation:

* Include clear, concise comments in your code.
* Provide a README.md with:
    * Project overview
    * Setup instructions
    * API documentation
    * Any assumptions or design decisions made

## Evaluation Criteria

1. Functionality: are the acceptance criteria met?
2. Code Quality: Is the code well-structured, readable, and maintainable?
3. Error Handling: How well does the application handle and communicate errors?
4. Documentation: Is the code well-commented and is there comprehensive project documentation?
5. UI/UX: Is the frontend intuitive and responsive?
6. How is the infrastructure handled? Secrets management, how to run and how to deploy? (no need to have all of that setup just examples of how you would do it)
7. Testing: Are there meaningful tests that cover critical functionality?

## Tooling

* TypeScript is a must, but feel free to use any library/framework/runtime standard library;
* Use any frontend UI library/framework and component library that you feel most comfortable with.

## Submission

Fork this repository and then provide a link to a Git repository with your solution. Include any necessary setup instructions in the README.md file.

Good luck!

