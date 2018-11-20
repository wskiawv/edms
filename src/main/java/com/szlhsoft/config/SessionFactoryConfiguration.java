package com.szlhsoft.config;

import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;
import java.io.IOException;

@Configuration
public class SessionFactoryConfiguration {
	@Value("${mybatis.config}")
	private String mybatis_config;
	@Value("${mybatis.mapper-locations}")
	private String mapper_path;
	@Value("${mybatis.type-aliases-package}")
	private String typeAliasesPackage;
	@Autowired
	@Qualifier("dataSource")
	private DataSource dataSource;
	@Bean
	public SqlSessionFactoryBean createSqlSessionFactoryBean() throws IOException {
		SqlSessionFactoryBean sqlSessionFactoryBean=new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setConfigLocation(new ClassPathResource(mybatis_config));
		PathMatchingResourcePatternResolver resolver=new PathMatchingResourcePatternResolver();
		String packageSearchPath= PathMatchingResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX+mapper_path;
		sqlSessionFactoryBean.setMapperLocations(resolver.getResources(packageSearchPath));
		sqlSessionFactoryBean.setDataSource(dataSource);
		sqlSessionFactoryBean.setTypeAliasesPackage(typeAliasesPackage);
		return sqlSessionFactoryBean;
			
	}
}
