package com.brudijoe.friendsterserver.controller;

import java.util.Comparator;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brudijoe.friendsterserver.model.Friend;
import com.brudijoe.friendsterserver.service.FriendsterService;

@RestController
@RequestMapping(path = "api/v1")
@CrossOrigin
public class FriendsterController {

    private final FriendsterService friendsterService;

    public FriendsterController(FriendsterService friendsterService) {
        this.friendsterService = friendsterService;
    }

    @GetMapping("/friends")
    public ResponseEntity<List<Friend>> getFriends() {
        List<Friend> friends = friendsterService.getFriends();
        friends.sort(Comparator.comparing(Friend::getFriendId));
        return ResponseEntity.ok(friends);
    }
}
