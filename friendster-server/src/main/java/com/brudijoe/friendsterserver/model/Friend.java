package com.brudijoe.friendsterserver.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "friend")
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "friend_id")
    private Long friendId;
    @Column(name = "friend_firstName", length = 255)
    private String friendFirstName;
    @Column(name = "friend_lastName", length = 255)
    private String friendLastName;

    public Friend() {

    }

    /* This contructor is for testing and needs a friendId */
    public Friend(Long friendId, String friendFirstName, String friendLastName) {
        this.friendId = friendId;
        this.friendFirstName = friendFirstName;
        this.friendLastName = friendLastName;
    }

    /* This contructor is for the database and doesn't need a friendId */
    public Friend(String friendFirstName, String friendLastName) {
        this.friendFirstName = friendFirstName;
        this.friendLastName = friendLastName;
    }

    public Long getFriendId() {
        return this.friendId;
    }

    public void setFriendId(Long friendId) {
        this.friendId = friendId;
    }

    public String getFriendFirstName() {
        return this.friendFirstName;
    }

    public void setFriendFirstName(String friendFirstName) {
        this.friendFirstName = friendFirstName;
    }

    public String getFriendLastName() {
        return this.friendLastName;
    }

    public void setFriendLastName(String friendLastName) {
        this.friendLastName = friendLastName;
    }

}
