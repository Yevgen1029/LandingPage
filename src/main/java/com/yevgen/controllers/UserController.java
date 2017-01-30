package com.yevgen.controllers;

import com.yevgen.model.User;
import com.yevgen.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("/login")
    public String login(@RequestParam(value = "error", required = false) String error,
                        @RequestParam(value = "logout", required = false) String logout, Model model) {
        if (error != null) {
            model.addAttribute("error", "Invalid Username or Password!" + error);
        }
        if (logout != null) {
            model.addAttribute("msg", "You have been logged out successfully");
        }
        return "login";
    }

    @RequestMapping("/register")
    public String register(Model model) {
        model.addAttribute("user", new User());
        return "register";
    }

    @RequestMapping(value = "/register/success", method = RequestMethod.POST)
    public String addUser(@ModelAttribute("user") User user, BindingResult result, Model model) {
        userService.addUser(user);
        return "registerSuccess";
    }

}
