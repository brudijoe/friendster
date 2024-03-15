package com.brudijoe.friendsterserver.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "Details")
@Table(name = "details")
public class Details {

    @Id
    @GeneratedValue
    @Column(name = "details_id")
    private Long detailsId;

    @Column(name = "political_orientation")
    private String politicalOrientation;

    @Column(name = "religion")
    private String religion;

    public Details() {
    }

    public Details(String politicalOrientation, String religion) {
        this.politicalOrientation = politicalOrientation;
        this.religion = religion;
    }

    public String getPoliticalOrientation() {
        return this.politicalOrientation;
    }

    public void setPoliticalOrientation(String politicalOrientation) {
        this.politicalOrientation = politicalOrientation;
    }

    public String getReligion() {
        return this.religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

}
