# Engineering Interview Challenge

## Overview

For the scope of this interview challenge we would like to focus on the Double Materiality process of CSRD reporting. [Example documentation about the process and what it entails](https://www.pwc.nl/en/topics/sustainability/esg/corporate-sustainability-reporting-directive/csrd-double-materiality-assessment.html).

You have the freedom to pick up a specific feature to provide more technical depth to but when designing the overall system take into account all the steps necessary to build a compliant report.

Examples of features would be:

- IRO operations like creation, analysis and rating;
- Topic Selection (this is a pre-condition of the above therefore also needs to make certain assumptions - like if the user has added custom sub sub topics);
- Stakeholder Integration - integrating a way for stakeholders to assess the current analysis of a company on a given IRO;
- ...

These topics should be picked by relevance to the overall process - so a plausible reasoning will need to be provided.

This challenge will be mostly to evaluate Engineering skills - risk assessment, requirement analysis, sum-cost analysis and adaptability. During the review session a live coding example of an abstraction that you think could represent such an implementation will be asked for (we will of course pair on this).

## Tools

- Use any diagramming tool and then embed it into markdown files when documenting the overall problem and respective solution;
- Take into consideration that we, as a company, use mostly cloud native infrastructure in AWS - so using AWS based services will probably be more representative of the day-to-day;
- For code examples feel free to use whatever you prefer but highly preferred Typed Languages or using Type decorators to better convey the design decisions - example would be Javascript with Typescript or Java - dynamic languages like Python are also viable but assisted by a type system or schemas like Pydantic to support understanding of the problem.

## Requirements

- Requirement analysis;
- System Architecture diagram;
- Example code for the system - even pseudo code is fine but preferance for a sample implementation - can be using mock data as long as it's clear how it would be used in a real-world scenario;
- Tradeoffs;
- Assumptions;
- Constraints;
- Risks;

## Submission

Please clonet this repository and share a repository with your solution - it should contain the following:

- A README.md file with your solution - referring to the requirements, domain and providing a clear explanation of your design;
- A system_design.md file with your system design and with diagrams;
- A code_example.md or actual code file with your code example of how to use the system - be it from an API, a CLI, or a UI;

## Disclaimer

There's no right or wrong answer here - this is an opportunity to show us how you think and how you would approach problems and how would you adequately decide on the path to take to provide a working solution.
