package com.szlhsoft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;
/**
*@Author: he
*@Description
*@Date:2018/11/28 23:20
*@Modify
**/
@EnableScheduling
@SpringBootApplication
@EnableAutoConfiguration
@EnableTransactionManagement
public class EdmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EdmsApplication.class, args);
	}
}
