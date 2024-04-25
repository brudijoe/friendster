package com.brudijoe.friendsterserver.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.brudijoe.friendsterserver.model.Friend;
import com.brudijoe.friendsterserver.repository.FriendsterRepository;

import jakarta.transaction.Transactional;

@Service
public class FriendsterService {

    private final FriendsterRepository friendsterRepository;

    public FriendsterService(FriendsterRepository friendsterRepository) {
        this.friendsterRepository = friendsterRepository;
    }

    public List<Friend> getFriends() {
        return friendsterRepository.findAll();
    }

    public void addFriend(Friend friend) {
        friendsterRepository.save(friend);
    }

    public void deleteFriend(Long friendId) {
        boolean exists = friendsterRepository.existsById(friendId);
        if (!exists) {
            throw new IllegalStateException("friend with friendId: " + friendId + " does not exists");
        }
        friendsterRepository.deleteById(friendId);
    }

    @Transactional
    public void editFriend(Long friendId, Friend currentFriend) {

        friendsterRepository.findById(friendId)
                .orElseThrow(() -> new IllegalStateException("friend with friendId: " + friendId + " does not exist"));

        friendsterRepository.save(currentFriend);
    }
}
