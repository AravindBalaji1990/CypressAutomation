Feature: Google web testing 
    
    Google title verification
    Google input verification

    Background: Pre-requisite to run the scenarios
        Given User launch the url

    @Smoke
    Scenario: Verify the title of Google page
        Then User verifies the title

    @Regression
    Scenario: Input data from steps to Google input box
        When user input the data "javascript"
        And user clicks the search button
        Then user verify the search result page with "Google Search"

    @Smoke @Regression
    Scenario: Input the data from table to Google input box
        When user input the data from table
    |data|
    |javascript|
    |cypress|
    |cypress doc|
        And user clicks the search button
        Then user verify the search result page with "Google Search"

    @sanity
    Scenario Outline: Verify the variety of data to be input in the google input box
        When user input the data from below table '<data>'
        And user clicks the search button
        Then user verify the search result page with "Google Search"

    Examples:
        |  data | 
        |javascript|
        |cypress|
        |cypress doc| 