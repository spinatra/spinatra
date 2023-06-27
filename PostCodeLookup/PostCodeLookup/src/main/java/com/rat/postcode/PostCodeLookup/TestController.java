package com.rat.postcode.PostCodeLookup;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TestController {
	@GetMapping("/welcome")
	public String hello(Model model,
			@RequestParam(value = "name", required = false, defaultValue = "World") String name) {
		model.addAttribute("name", name);
		return "welcome";
	}
	
	@GetMapping(value = "/")
	public String index(Model model) {

	    return "index";
	}
}
