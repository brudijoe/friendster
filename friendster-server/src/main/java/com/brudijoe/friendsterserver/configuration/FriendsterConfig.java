package com.brudijoe.friendsterserver.configuration;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.brudijoe.friendsterserver.model.Friend;
import com.brudijoe.friendsterserver.repository.FriendsterRepository;

@Configuration
public class FriendsterConfig {

    @Bean
    CommandLineRunner commandLineRunner(FriendsterRepository friendsterRepository) {
        return args -> {
            Friend friendOne = new Friend(
                    "Bob",
                    "Dylon");

            Friend friendTwo = new Friend(
                    "Tom",
                    "Shetfield");

            friendsterRepository.saveAll(List.of(friendOne, friendTwo));
        };
    }
}
