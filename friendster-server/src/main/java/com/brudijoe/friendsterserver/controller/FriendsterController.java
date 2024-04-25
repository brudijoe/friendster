package com.brudijoe.friendsterserver.controller;

import java.util.Comparator;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @PostMapping("/addFriend")
    public ResponseEntity<List<Friend>> addFriend(@RequestBody Friend friend) {
        friendsterService.addFriend(friend);
        List<Friend> updatedFriends = friendsterService.getFriends();
        updatedFriends.sort(Comparator.comparing(Friend::getFriendId));
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedFriends);
    }

    @DeleteMapping(path = "/deleteFriend")
    public ResponseEntity<List<Friend>> deleteFriend(@RequestParam("friendId") Long friendId) {
        friendsterService.deleteFriend(friendId);
        List<Friend> updatedFriends = friendsterService.getFriends();
        updatedFriends.sort(Comparator.comparing(Friend::getFriendId));
        return ResponseEntity.ok().body(updatedFriends);
    }

    @PutMapping(path = "/editFriend")
    public ResponseEntity<List<Friend>> editFriend(@RequestParam("friendId") Long friendId,
            @RequestBody Friend friend) {
        friendsterService.editFriend(friendId, friend);
        List<Friend> updatedFriends = friendsterService.getFriends();
        updatedFriends.sort(Comparator.comparing(Friend::getFriendId));
        return ResponseEntity.ok().body(updatedFriends);
    }
}
