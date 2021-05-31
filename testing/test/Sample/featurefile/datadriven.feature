Feature: To test data driven testing

@calculatorTesting
Scenario Outline: calculate the below numbers
Given user is in the calculator site
When user enters "<num1>" and "<num2>"
Then calci must add the above numbers and output should be "<num3>"

Examples:
    | num1 | num2 | num3|
    | 4| 5  | 9 |
    | 4| 4 | 9 |


@AngularTesting
Scenario: to test login
Given when user is in the calculator page
When enter the number
Then the calculator should calculate it

