package com.szlhsoft.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@MapperScan("com.szlhsoft.dao")
public class DataSourceConfiguration{
	@Value("${spring.datasource.driver-class-name}")
	private String driverClass;
	@Value("${spring.datasource.url}")
	private String jdbcUrl;
	@Value("${spring.datasource.username}")
	private String username;
	@Value("${spring.datasource.password}")
	private String password;
	@Bean(name="dataSource")
	@ConfigurationProperties(prefix = "spring.datasource.type")
	public DataSource druidDataSource() {
		DruidDataSource druidDataSource=new DruidDataSource();
		druidDataSource.setDriverClassName(driverClass);
		druidDataSource.setUrl(jdbcUrl);
		druidDataSource.setUsername(username);
		druidDataSource.setPassword(password);
		druidDataSource.setDefaultAutoCommit(true);
		return druidDataSource;
	}

}
