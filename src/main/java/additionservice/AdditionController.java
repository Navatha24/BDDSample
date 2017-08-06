package additionservice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.*;

@RestController
public class AdditionController {

	@RequestMapping(value = "/addition/{name1}/{name2}", method = RequestMethod.GET, produces = {"application/xml"})
	@ResponseBody
	public  Addition  addition(@PathVariable int name1,@PathVariable int name2
			) throws Exception {
		Addition sum=new Addition(name1,name2);
		return sum;
	}
}
