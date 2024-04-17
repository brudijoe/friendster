package com.brudijoe.friendsterserver.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity(name = "Details")
@Table(name = "details")
public class Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "details_id")
    private Long detailsId;

    @Column(name = "political_orientation")
    private String politicalOrientation;

    @Column(name = "religion")
    private String religion;

    // Bidirectional Mapping
    @OneToMany(targetEntity = Hobbies.class, cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "details")
    private List<Hobbies> hobbies = new ArrayList<>();

    public Details() {
    }

    public Details(String politicalOrientation, String religion, List<Hobbies> hobbies) {
        this.politicalOrientation = politicalOrientation;
        this.religion = religion;
        this.hobbies = hobbies;
    }

    public Long getDetailsId() {
        return this.detailsId;
    }

    public void setDetailsId(Long detailsId) {
        this.detailsId = detailsId;
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

    public List<Hobbies> getHobbies() {
        return this.hobbies;
    }

    public void setHobbies(List<Hobbies> hobbies) {
        this.hobbies = hobbies;
    }

    public void addHobbies(Hobbies hobby) {
        if (hobbies == null) {
            hobbies = new ArrayList<>();
        }
        hobbies.add(hobby);
        hobby.setDetails(this);
    }

}
