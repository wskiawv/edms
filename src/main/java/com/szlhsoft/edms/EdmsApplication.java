package com.szlhsoft.edms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;
@EnableScheduling
@SpringBootApplication
@EnableAutoConfiguration
@EnableTransactionManagement
public class EdmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdmsApplication.class, args);
	}
}
