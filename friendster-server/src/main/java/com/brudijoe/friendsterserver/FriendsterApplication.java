package com.brudijoe.friendsterserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class FriendsterApplication {

	public static void main(String[] args) {
		SpringApplication.run(FriendsterApplication.class, args);
	}

}
