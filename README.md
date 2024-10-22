# Full-Stack Coding Task: Carbon Emissions Dashboard

## Objective

Create a web application that allows users to compare CO2 emissions data between countries using the World Bank Climate Data API. The application should have both a backend API and a frontend interface.


## Backend Requirements

1. Create a RESTful API with the following endpoint:

* GET /api/emissions: Accepts query parameters for multiple country codes and a year range;
* Example: /api/emissions?countries=USA,CHN,IND&start_year=2010&end_year=2019
* Fetch data from the [World Bank Climate Data API](https://data.worldbank.org/);
* Process and aggregate the data;
* Handle errors gracefully, including API failures and invalid input;
* Return the processed data in a JSON format suitable for frontend consumption.

## Frontend Requirements

1. Create a frontend application with:

* A table displaying the numerical data.
* [Bonus] Displaying a chart of data;
* [Bonus] Some table functionality of your choosing.

1. Implement error handling to display user-friendly messages for various error scenarios.
2. Simple and accessible interface

## Code Quality Focus Areas

1. Architecture: Demonstrate a clear separation of concerns between data fetching, processing, and presentation.
2. Error Handling: 

* Backend: Implement comprehensive error handling, including input validation, API error handling, and appropriate HTTP status codes.
* Frontend: Display user-friendly error messages and handle loading states.

## Documentation:

* Include clear, concise comments in your code.
* Provide a README.md with:
    * Project overview
    * Setup instructions
    * API documentation
    * Any assumptions or design decisions made

1. Code Style: Follow language-specific best practices and maintain consistent formatting.
2. Testing: Write unit tests for critical functions, especially data processing and error handling routines.

## Evaluation Criteria

1. Functionality: Does the application work as described?
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

