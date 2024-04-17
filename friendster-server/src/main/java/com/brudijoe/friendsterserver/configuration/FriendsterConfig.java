package com.brudijoe.friendsterserver.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.brudijoe.friendsterserver.model.Basics;
import com.brudijoe.friendsterserver.model.Details;
import com.brudijoe.friendsterserver.model.Friend;
import com.brudijoe.friendsterserver.model.Hobbies;
import com.brudijoe.friendsterserver.repository.FriendsterRepository;

@Configuration
public class FriendsterConfig {

    @Bean
    CommandLineRunner commandLineRunner(FriendsterRepository friendsterRepository) {
        return args -> {
            // Delete existing data
            friendsterRepository.deleteAll();

            String firstName = "Bob";
            String lastName = "Dylon";

            String politicalOrientation = "left";
            String religion = "none";

            // Insert new data
            Basics basicsOne = new Basics(firstName, lastName);
            Basics basicsTwo = new Basics(firstName, lastName);

            // Create Details objects
            Details detailsOne = new Details(politicalOrientation, religion, null);
            Details detailsTwo = new Details(politicalOrientation, religion, null);

            // Add hobbies for detailsOne
            Hobbies hobbyOne = new Hobbies("counting rocks");
            detailsOne.addHobbies(hobbyOne);

            // Add a second hobby to hobbyOne
            Hobbies hobbyTwo = new Hobbies("painting");
            detailsOne.addHobbies(hobbyTwo);

            // Add hobbies for detailsTwo
            Hobbies hobbyThree = new Hobbies("playing guitar");
            detailsTwo.addHobbies(hobbyThree);

            Friend friendOne = new Friend(basicsOne, detailsOne);
            Friend friendTwo = new Friend(basicsTwo, detailsTwo);

            friendsterRepository.saveAll(List.of(friendOne, friendTwo));
        };
    }
}
