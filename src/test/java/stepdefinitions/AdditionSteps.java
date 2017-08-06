package stepdefinitions;

import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.StringReader;
import java.util.HashMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdditionSteps {

	private String baseUri = "http://localhost:8080/addition/{name1}/{name2}/";
	private RestTemplate restTemplate = new RestTemplate();
	private HashMap<String, Object> numberList = new HashMap<String, Object>();;
	private ResponseEntity<String> response;

	@Given("^I have any two valid numbers (-?\\d+) (-?\\d+)$")
	public void iHaveAnyTwoValidNumbers(Object firstnumber, Object secondnumber) throws Throwable {
		numberList.put("name1", firstnumber);
		numberList.put("name2", secondnumber);
	}

	@Given("^I have any invalid numbers (\\d+) a$")
	public void iHaveAnyInvalidNumbersA(int firstnumber) throws Throwable {
		numberList.put("name1", firstnumber);
		numberList.put("name2", 'a');
	}

	@Given("^I have any two valid numbers '(\\d+)' '(\\d+)'$")
	public void iHaveAnyTwoValidNumbers(int firstnumber, int secondnumber) throws Throwable {
		numberList.put("name1", firstnumber);
		numberList.put("name2", secondnumber);
	}

	@Then("^The response type is in XML format:$")
	public void theResponseTypeIsInXMLFormat(String xmlresult) throws Throwable {
		String result = response.getBody();
		assertThat(xmlresult.replace("\n", ""), is(equalTo(result)));
	}

	@When("^I send a request to the service with above numbers$")
	public void iSendARequestToTheServiceWithAboveNumbers() throws Throwable {
		HttpEntity<String> entity = new HttpEntity<String>(new HttpHeaders());
		response = restTemplate.exchange(baseUri, HttpMethod.GET, entity, String.class, numberList);
	}

	@Then("^I get successful response with status code '(\\d+)'$")
	public void iGetSuccessfulResponseWithStatusCode(int statuscode) throws Throwable {
		assertThat(statuscode, is(equalTo(response.getStatusCodeValue())));
	}

	@And("^The sum of two numbers is (-?\\d+)$")
	public void theSumOfTwoNumbersIs(String sum) throws Throwable {
		String result = DocumentParser(response.getBody());
		assertThat(sum, is(equalTo(result)));
	}

	@Then("^The sum of two numbers is not equal to (-?\\d+)$")
	public void theSumOfTwoNumbersIsNotEqualTo(int sum) throws Throwable {
		String result = DocumentParser(response.getBody());
		assertThat(sum, is(not(equalTo(result))));
	}

	private String DocumentParser(String xml) throws SAXException, IOException, ParserConfigurationException {
		Document doc = DocumentBuilderFactory.newInstance().newDocumentBuilder()
				.parse(new InputSource(new StringReader(xml)));
		String result = null;
		NodeList errNodes = doc.getElementsByTagName("Addition");
		if (errNodes.getLength() > 0) {
			Element err = (Element) errNodes.item(0);
			result = err.getElementsByTagName("result").item(0).getTextContent();
		}
		return result;
	}

}
