package com.brudijoe.friendsterserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.brudijoe.friendsterserver.model.Friend;

public interface FriendsterRepository extends JpaRepository<Friend, Long> {
    @Query("SELECT n FROM Friend n WHERE n.friendId = ?1")
    Friend findById(long friendId);
}
