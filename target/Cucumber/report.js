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
  "duration": 255163842,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 82833291,
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
  "duration": 3191237,
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
  "duration": 84037338,
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
  "duration": 6397538,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 3638517,
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
  "duration": 98624,
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
  "duration": 1273974,
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
  "duration": 6040158,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2575582,
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
  "duration": 86397,
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
  "duration": 1587148,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful response type is of XML format",
  "description": "",
  "id": "addition;successful-response-type-is-of-xml-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I have any two valid numbers \u00271\u0027 \u00272\u0027",
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
  "name": "The response type is in XML format:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 23,
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
  "duration": 5195197,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 3432649,
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
  "duration": 112505,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.theResponseTypeIsInXMLFormat(String)"
});
formatter.result({
  "duration": 105897,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Error result for any invalid number",
  "description": "",
  "id": "addition;error-result-for-any-invalid-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I have any invalid numbers \u003cfirstnumber\u003e \u003csecondnumber\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I get bad request error response with status code \u0027400\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
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
      "line": 36,
      "id": "addition;error-result-for-any-invalid-number;;1"
    },
    {
      "cells": [
        "1",
        "a",
        "2"
      ],
      "line": 37,
      "id": "addition;error-result-for-any-invalid-number;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
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
  "line": 32,
  "name": "I have any invalid numbers 1 a",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I send a request to the service with above numbers",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I get bad request error response with status code \u0027400\u0027",
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
  "duration": 6085117,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 6569083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 51
    }
  ],
  "location": "AdditionSteps.iGetBadRequestErrorResponseWithStatusCode(int)"
});
formatter.result({
  "duration": 84355,
  "status": "passed"
});
});