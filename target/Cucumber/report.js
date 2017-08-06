$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addition.feature");
formatter.feature({
  "line": 2,
  "name": "Addition",
  "description": "As manager of LightBox\nI want to build a service to add two numbers\nso that I dont need to use a calculator",
  "id": "addition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Valid result for addition of two numbers",
  "description": "",
  "id": "addition;valid-result-for-addition-of-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I have any two valid numbers \u003cfirstnumber\u003e \u003csecondnumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The sum of two numbers is \u003csum\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "addition;valid-result-for-addition-of-two-numbers;",
  "rows": [
    {
      "cells": [
        "firstnumber",
        "secondnumber",
        "sum"
      ],
      "line": 13,
      "id": "addition;valid-result-for-addition-of-two-numbers;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "2"
      ],
      "line": 14,
      "id": "addition;valid-result-for-addition-of-two-numbers;;2"
    },
    {
      "cells": [
        "2",
        "1",
        "3"
      ],
      "line": 15,
      "id": "addition;valid-result-for-addition-of-two-numbers;;3"
    },
    {
      "cells": [
        "-1",
        "-1",
        "-2"
      ],
      "line": 16,
      "id": "addition;valid-result-for-addition-of-two-numbers;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Valid result for addition of two numbers",
  "description": "",
  "id": "addition;valid-result-for-addition-of-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have any two valid numbers 1 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The sum of two numbers is 2",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "AdditionSteps.iHaveAnyTwoValidNumbers(Object,Object)"
});
formatter.result({
  "duration": 252722187,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 78367187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 3759064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "AdditionSteps.theSumOfTwoNumbersIs(String)"
});
formatter.result({
  "duration": 78979896,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Valid result for addition of two numbers",
  "description": "",
  "id": "addition;valid-result-for-addition-of-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have any two valid numbers 2 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The sum of two numbers is 3",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "AdditionSteps.iHaveAnyTwoValidNumbers(Object,Object)"
});
formatter.result({
  "duration": 6310842,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 3295080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 119249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AdditionSteps.theSumOfTwoNumbersIs(String)"
});
formatter.result({
  "duration": 1091802,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Valid result for addition of two numbers",
  "description": "",
  "id": "addition;valid-result-for-addition-of-two-numbers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have any two valid numbers -1 -1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "The sum of two numbers is -2",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 29
    },
    {
      "val": "-1",
      "offset": 32
    }
  ],
  "location": "AdditionSteps.iHaveAnyTwoValidNumbers(Object,Object)"
});
formatter.result({
  "duration": 5194137,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2600414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 86778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 26
    }
  ],
  "location": "AdditionSteps.theSumOfTwoNumbersIs(String)"
});
formatter.result({
  "duration": 887569,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Invalid result for addition of two numbers",
  "description": "",
  "id": "addition;invalid-result-for-addition-of-two-numbers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I have any two valid numbers \u003cfirstnumber\u003e \u003csecondnumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "The sum of two numbers is not equal to \u003csum\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "addition;invalid-result-for-addition-of-two-numbers;",
  "rows": [
    {
      "cells": [
        "firstnumber",
        "secondnumber",
        "sum"
      ],
      "line": 24,
      "id": "addition;invalid-result-for-addition-of-two-numbers;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "3"
      ],
      "line": 25,
      "id": "addition;invalid-result-for-addition-of-two-numbers;;2"
    },
    {
      "cells": [
        "2",
        "1",
        "5"
      ],
      "line": 26,
      "id": "addition;invalid-result-for-addition-of-two-numbers;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Invalid result for addition of two numbers",
  "description": "",
  "id": "addition;invalid-result-for-addition-of-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I have any two valid numbers 1 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "The sum of two numbers is not equal to 3",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "AdditionSteps.iHaveAnyTwoValidNumbers(Object,Object)"
});
formatter.result({
  "duration": 5653004,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2594209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 84551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "AdditionSteps.theSumOfTwoNumbersIsNotEqualTo(int)"
});
formatter.result({
  "duration": 2740233,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Invalid result for addition of two numbers",
  "description": "",
  "id": "addition;invalid-result-for-addition-of-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I have any two valid numbers 2 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "The sum of two numbers is not equal to 5",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 31
    }
  ],
  "location": "AdditionSteps.iHaveAnyTwoValidNumbers(Object,Object)"
});
formatter.result({
  "duration": 5977531,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2281023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 92139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 39
    }
  ],
  "location": "AdditionSteps.theSumOfTwoNumbersIsNotEqualTo(int)"
});
formatter.result({
  "duration": 945128,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Successful response type is of XML format",
  "description": "",
  "id": "addition;successful-response-type-is-of-xml-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I have any two valid numbers \u00271\u0027 \u00272\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I get successful response with status code \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "The response type is in XML format:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 33,
    "value": "\u003cAddition\u003e\n\u003cfirstnumber\u003e1\u003c/firstnumber\u003e\n\u003csecondnumber\u003e2\u003c/secondnumber\u003e\n\u003cresult\u003e3\u003c/result\u003e\n\u003c/Addition\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "AdditionSteps.iHaveAnyTwoValidNumbers(int,int)"
});
formatter.result({
  "duration": 5300441,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2402952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 83288,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.theResponseTypeIsInXMLFormat(String)"
});
formatter.result({
  "duration": 99059,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "Error result for any invalid number",
  "description": "",
  "id": "addition;error-result-for-any-invalid-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "I have any invalid numbers \u003cfirstnumber\u003e \u003csecondnumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I get successful response with status code \u0027400\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "addition;error-result-for-any-invalid-number;",
  "rows": [
    {
      "cells": [
        "firstnumber",
        "secondnumber",
        "sum"
      ],
      "line": 46,
      "id": "addition;error-result-for-any-invalid-number;;1"
    },
    {
      "cells": [
        "1",
        "a",
        "2"
      ],
      "line": 47,
      "id": "addition;error-result-for-any-invalid-number;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Error result for any invalid number",
  "description": "",
  "id": "addition;error-result-for-any-invalid-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@addition"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I have any invalid numbers 1 a",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I get successful response with status code \u0027400\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "AdditionSteps.iHaveAnyInvalidNumbersA(int)"
});
formatter.result({
  "duration": 13736233,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 5866171,
  "error_message": "org.springframework.web.client.HttpClientErrorException: 400 null\n\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java:63)\n\tat org.springframework.web.client.RestTemplate.handleResponse(RestTemplate.java:700)\n\tat org.springframework.web.client.RestTemplate.doExecute(RestTemplate.java:653)\n\tat org.springframework.web.client.RestTemplate.execute(RestTemplate.java:621)\n\tat org.springframework.web.client.RestTemplate.exchange(RestTemplate.java:540)\n\tat stepdefinitions.AdditionSteps.iSendARequestToTheServiceWithAboveNumbers(AdditionSteps.java:68)\n\tat ✽.When I send a request to the service with above numbers(addition.feature:43)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 44
    }
  ],
  "location": "AdditionSteps.iGetSuccessfulResponseWithStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
});