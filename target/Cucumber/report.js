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
  "duration": 251483519,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 77960884,
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
  "duration": 3112018,
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
  "duration": 80510087,
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
  "duration": 6049471,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 3251695,
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
  "duration": 112330,
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
  "duration": 1059809,
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
  "duration": 5287951,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2598985,
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
  "duration": 81091,
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
  "duration": 829628,
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
  "duration": 4923186,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2920251,
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
  "duration": 112117,
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
  "duration": 1997382,
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
  "duration": 6905173,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2804488,
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
  "duration": 116176,
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
  "duration": 1237236,
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
  "duration": 5021514,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.iSendARequestToTheServiceWithAboveNumbers()"
});
formatter.result({
  "duration": 2661123,
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
  "duration": 93703,
  "status": "passed"
});
formatter.match({
  "location": "AdditionSteps.theResponseTypeIsInXMLFormat(String)"
});
formatter.result({
  "duration": 153222,
  "status": "passed"
});
});