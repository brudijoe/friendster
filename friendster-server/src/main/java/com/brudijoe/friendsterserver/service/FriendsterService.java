package com.brudijoe.friendsterserver.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.brudijoe.friendsterserver.model.Friend;
import com.brudijoe.friendsterserver.repository.FriendsterRepository;

@Service
public class FriendsterService {

    private final FriendsterRepository friendsterRepository;

    public FriendsterService(FriendsterRepository friendsterRepository) {
        this.friendsterRepository = friendsterRepository;
    }

    public List<Friend> getFriends() {
        return friendsterRepository.findAll();
    }
}
