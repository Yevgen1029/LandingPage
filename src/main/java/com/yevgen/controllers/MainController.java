package com.yevgen.controllers;

import com.yevgen.services.interfaces.JsonService;
import com.yevgen.util.Constants;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @Autowired
    JsonService jsonService;


    @RequestMapping("/")
    public String home(Model model) {
        JSONObject json = jsonService.readJsonFromUrl(Constants.NEWS_URL);
        model.addAttribute("json", json);
        return "home";
    }


}
