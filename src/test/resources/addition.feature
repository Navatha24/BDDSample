@addition 
Feature: Addition 
As manager of LightBox
I want to build a service to add two numbers
so that I dont need to use a calculator

Scenario Outline: Valid result for addition of two numbers 
	Given I have any two valid numbers <firstnumber> <secondnumber> 
	When I send a request to the service with above numbers 
	Then I get successful response with status code '200' 
	And The sum of two numbers is <sum> 
	Examples: 
		|firstnumber|secondnumber|sum|
		|1|1|2|
		|2|1|3|
		|-1|-1|-2|		
		
Scenario: Successful response type is of XML format 
	Given I have any two valid numbers '1' '2'
	When I send a request to the service with above numbers 
	Then I get successful response with status code '200' 
	And The response type is in XML format: 
	"""
	<Addition>
	<firstnumber>1</firstnumber>
	<secondnumber>2</secondnumber>
	<result>3</result>
	</Addition>
	"""
		
Scenario Outline: Error result for any invalid number
	Given I have any invalid numbers <firstnumber> <secondnumber> 
	When I send a request to the service with above numbers 
	Then I get bad request error response with status code '400'
	Examples: 
	|firstnumber|secondnumber|sum|
	|1|a|2|
				
	