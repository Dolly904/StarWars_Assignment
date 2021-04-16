$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Vishwarajsinh/eclipse-workspace/API_Assignment/src/main/java/features/StarWars.feature");
formatter.feature({
  "line": 1,
  "name": "Verify the functionality of Swapi website feature",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Checking all starwars characters valid data scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-all-starwars-characters-valid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User should launch swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter valid service URL for all characters",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on the request button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check final result",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.userLaunchURL()"
});
formatter.result({
  "duration": 7993442700,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.validDataforAllCharacters()"
});
formatter.result({
  "duration": 66631600,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.clickRequestforAllCharacters()"
});
formatter.result({
  "duration": 265090600,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.validate_the_output_is_displayed_or_not()"
});
formatter.result({
  "duration": 77369800,
  "status": "passed"
});
formatter.after({
  "duration": 1824315100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Checking starwars all characters by using invalid data scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-starwars-all-characters-by-using-invalid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User must open swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "enter all starwars characters invalid data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click request button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "check displayed result",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.useMustOpenSwapi()"
});
formatter.result({
  "duration": 6746738900,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.allCharInvalidData()"
});
formatter.result({
  "duration": 101786300,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.clickRequestforAllCharInvalidData()"
});
formatter.result({
  "duration": 264392300,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.checkAllCharInvalidDataResult()"
});
formatter.result({
  "duration": 76248500,
  "status": "passed"
});
formatter.after({
  "duration": 1702845100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Checking specific character output with valid data",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-specific-character-output-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User must be on swapi",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "enter valid service URL for starwars specific character",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on request box",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "confirm the result",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.userOnSwapi()"
});
formatter.result({
  "duration": 7384174700,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.validServiceURLofSpecificCharacter()"
});
formatter.result({
  "duration": 120436500,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.click_on_Request_button()"
});
formatter.result({
  "duration": 258555400,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.checkFinalResult()"
});
formatter.result({
  "duration": 67662600,
  "status": "passed"
});
formatter.after({
  "duration": 1702776700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Checking starwars specific character using invalid service URL",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-starwars-specific-character-using-invalid-service-url",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User should launch the website",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "enter invalid service URL for specific character",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "do click on the request button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "confirm if the end result displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.userLaunchSwapi()"
});
formatter.result({
  "duration": 7357329400,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.invalidServiceURLforSpecificCharacter()"
});
formatter.result({
  "duration": 118140500,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.requestButtonforInvalidSpecificCharacterURL()"
});
formatter.result({
  "duration": 269279100,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.resultofInvalidserviceURLforspecificChar()"
});
formatter.result({
  "duration": 55782600,
  "status": "passed"
});
formatter.after({
  "duration": 1739558900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Checking serching with valid data scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-serching-with-valid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User should open firefox and type swapi URL",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "enter valid planets/characters valid serviceURL",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "click the request btn",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "check the outcome",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.openSwapi()"
});
formatter.result({
  "duration": 8423404800,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.searchWithValidData()"
});
formatter.result({
  "duration": 117747200,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.requestButtonforValidSearch()"
});
formatter.result({
  "duration": 281933900,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.resultofValidSearchData()"
});
formatter.result({
  "duration": 43517600,
  "status": "passed"
});
formatter.after({
  "duration": 1503662800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Searching with invalid data result scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;searching-with-invalid-data-result-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User must be on homepage of swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "enter invalid service URL to search planets/characters",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "do click on request",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "check if the final result is available",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.userMustBeOnSwapiHomepage()"
});
formatter.result({
  "duration": 8296048700,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.searchWithInvalidData()"
});
formatter.result({
  "duration": 56166900,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.requestButtonforSearchInvalidData()"
});
formatter.result({
  "duration": 261348400,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.resultofSearchWithInvalidData()"
});
formatter.result({
  "duration": 43145900,
  "status": "passed"
});
formatter.after({
  "duration": 1630403600,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Checking the blank input functionality scenario",
  "description": "",
  "id": "verify-the-functionality-of-swapi-website-feature;checking-the-blank-input-functionality-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "User should be on homepage of swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "keep service URL field blank",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on the request",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "check if the result is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StarWarsStepDefi.userIsOnHomepageofSwapi()"
});
formatter.result({
  "duration": 7395334300,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.blankServiceURLField()"
});
formatter.result({
  "duration": 102843100,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.clickRequestforBlankURL()"
});
formatter.result({
  "duration": 265574700,
  "status": "passed"
});
formatter.match({
  "location": "StarWarsStepDefi.blankServiceURLResult()"
});
formatter.result({
  "duration": 43509900,
  "status": "passed"
});
formatter.after({
  "duration": 1475512900,
  "status": "passed"
});
});