package com.brudijoe.friendsterserver.configuration;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.brudijoe.friendsterserver.model.Basics;
import com.brudijoe.friendsterserver.model.Friend;
import com.brudijoe.friendsterserver.repository.FriendsterRepository;

@Configuration
public class FriendsterConfig {

    @Bean
    CommandLineRunner commandLineRunner(FriendsterRepository friendsterRepository) {
        return args -> {
            // Delete existing data
            friendsterRepository.deleteAll();

            // Insert new data
            Basics basicsOne = new Basics("Bob", "Dylon");
            Basics basicsTwo = new Basics("Tom", "Shetfield");

            Friend friendOne = new Friend(basicsOne);
            Friend friendTwo = new Friend(basicsTwo);

            friendsterRepository.saveAll(List.of(friendOne, friendTwo));
        };
    }
}
