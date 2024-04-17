package com.brudijoe.friendsterserver.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity(name = "Hobbies")
@Table(name = "hobbies")
public class Hobbies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hobbies_id")
    private Long hobbiesId;

    @ManyToOne(targetEntity = Details.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "details_id")
    private Details details;

    private String hobby;

    public Hobbies() {
    }

    public Hobbies(String hobby) {
        this.hobby = hobby;
    }

    public Long getHobbiesId() {
        return this.hobbiesId;
    }

    public void setHobbiesId(Long hobbiesId) {
        this.hobbiesId = hobbiesId;
    }

    public String getHobby() {
        return this.hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public void setDetails(Details details) {
        this.details = details;
    }

}
