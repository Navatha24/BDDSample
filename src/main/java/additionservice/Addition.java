package additionservice;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "addnumbers")
public class Addition implements Serializable {

	@XmlElement
	private int firstnumber;

	@XmlElement
	private int secondnumber;

	@XmlElement
	private int result;

	public int getFirstnumber() {
		return firstnumber;
	}

	public int getSecondnumber() {
		return secondnumber;
	}

	public int getResult() {
		return result;
	}

	public void setResult(int result) {
		this.result = result;
	}

	public Addition(int firstnumber, int secondnumber) {
		this.firstnumber = firstnumber;
		this.secondnumber = secondnumber;
		this.result = this.firstnumber + this.secondnumber;
	}

	@Override
	public String toString() {
		return "Addition [firstnumber=" + firstnumber + ", secondnumber=" + secondnumber + ", result=" + result + "]";
	}

}
