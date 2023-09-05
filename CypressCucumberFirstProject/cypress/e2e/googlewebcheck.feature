Feature: Test the google applicaiton

#any pre-requisite we need to use the background
# all the scenarios if have a common pre-requisite we can mention i the background
Background: pre-requisite to rint he scenario
    Given User open the browser and enters the url
    When user validates the url

@smoke
Scenario: To check the text box is available and accepts keywords
    And the user enters data in the text box
    |data|
    |javascript|
    |cypress|

@regression
Scenario Outline: One functionality but different data
        When user input the data from below table '<data>'
        And user clicks the search button
        Then user verify the search result page with "About 9,600,000,000 results"
Examples:
        |  data | 
        |javascript|
        |cypress|
        |cypress doc| 