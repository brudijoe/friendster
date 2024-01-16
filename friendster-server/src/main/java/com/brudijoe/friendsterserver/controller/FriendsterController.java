package com.brudijoe.friendsterserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1")
@CrossOrigin
public class FriendsterController {

    @GetMapping("/greeting")
    public String greeting() {
        return "Hallo World!";
    }
}
