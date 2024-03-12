package com.brudijoe.friendsterserver.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity(name = "Friend")
@Table(name = "friend")
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "friend_id")
    private Long friendId;

    // Unidirectional Mapping
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "basics_id")
    private Basics basics;

    // Default constructor
    public Friend() {
    }

    /* This constructor is for testing and needs a friendId */
    public Friend(Long friendId, Basics basics) {
        this.friendId = friendId;
        this.basics = basics;
    }

    /* This constructor is for the database and doesn't need a friendId */
    public Friend(Basics basics) {
        this.basics = basics;
    }

    // Getters and setters for Basics
    public Basics getBasics() {
        return basics;
    }

    public void setBasics(Basics basics) {
        this.basics = basics;
    }

    public Long getFriendId() {
        return this.friendId;
    }

    public void setFriendId(Long friendId) {
        this.friendId = friendId;
    }

}