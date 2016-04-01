# DATA STORYLLER EXERCISE
**Tell a visual story with the given datasets**

## CONTENTS
1. [INSTALLATION](#installation)
2. [EXERCISE](#exercise)
  a. [Requirements](#requirements)
  b. [Bonuses](#bonuses)
  c. [Guidelines](#guidelines)
  d. [Evaluation Metrics](#evaluation-metrics)
6. [DOCUMENTATION](#documentation)
  a. [Goals](#goals)
  b. [Decisions](#decisions)
  e. [Endpoints](#api-endpoints)

# INSTALLATION
- Clone this repo and navigate to local repository
- Open ./views/index.html in a browser

# EXERCISE
**Tell a story with the given datasets in D3.js and C3.js**

## Requirements

- Corrects arbitrary English text submitted via HTTP request, so that it:
	- Contains exactly one space after a period between sentences (as prescribed by the rules of modern typesetting).
	- The HTTP response should contain the corrected text along with metadata enumerating the changes (in JSON or your preferred format).

## Guidelines
- Three hour time limit
	- Receive exercise, submit work-in-progress three hours later
	- If you're close to finishing when the time is up, submit, create a versioned copy, and submit the completed copy separately
- Choice of language and framework
- Make decisions about ambiguities and document if necessary

## Evaluation Metrics
- Concision (i.e., don't build more than the spec asks for)
- Ruby/JavaScript best practices
- HTTP best practices
- Handling of edge cases
- Perfect accuracy is less important than those things
- Start with the backend portion and get as far as you can.

# DOCUMENTATION
## Goals
- Understand and plan for all exercise requirements and guidelines
- Recognize the characteristics of the exercise and relate them to best practices and construction patterns by documenting decisions, and describing rationale and alternatives
- Write professional code that would be easy for others to work with, focusing on:
	- Organization, OOP, modularity, DRY code/encapsulation, semantic naming, spacing and indentation, documentation
	- Version control using feature branches, frequent commits, pithy commit messages
- Refactor
- Write tests in Rspec

## Decisions

_Documentation of decisions including rationale and alternatives_

**Unclear whether Original text and Altered text needs to be persistent data**

_Solution_ In a real world application, we would likely need to save this data, but for this exercise I will treat it as temp

**Unsure of edge cases for spaces after sentences in the rules of modern typesetting**

_Solution_ Decided to insert space after every period, and refactor for edge cases later, time permitting.

**Unclear what about the changes to the original_text needs to be enumerated**

_Solution_ Decided to simply include metadata describing the text update. Real world example might include specific data, like the count of spaces added for example.

**Manifest in application.js seems to be broken, texts.js asset missing**

_Solution_ Would be a priority to fix this bug in order to maintain proper asset pipeline.
