package com.cv.stock.stockservice;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configurable
public class SpringBootConf {

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}
}
