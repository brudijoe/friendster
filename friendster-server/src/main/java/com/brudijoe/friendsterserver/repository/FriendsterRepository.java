package com.brudijoe.friendsterserver.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.brudijoe.friendsterserver.model.Friend;

public interface FriendsterRepository extends JpaRepository<Friend, Long> {
    @Query("SELECT n FROM Friend n WHERE n.friendId = ?1")
    Optional<Friend> findById(Long friendId);
}
