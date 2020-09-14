package com.cv.stock.stockservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class StockController {

	@Autowired
	JdbcTemplate jdbcTemplate;

	@RequestMapping("/getBestStocks")
	public List<Stock> getBestStocks() {
		String sql = "SELECT  SYMBOL, MAX(VOLUME) AS VOLUME,  MAX(OPEN) AS OPEN, MAX(HIGH) AS HIGH FROM STOCK GROUP BY SYMBOL";
		return this.jdbcTemplate.query(sql, new BeanPropertyRowMapper<Stock>(Stock.class));
	}

	@RequestMapping("/getSelectedStocks")
	public List<Stock> getSelectedStocks(@RequestParam(value = "symbol") String symbol) {
		String sql = "SELECT  * FROM STOCK WHERE SYMBOL = ?";
		return this.jdbcTemplate.query(sql, new String[] { symbol }, new BeanPropertyRowMapper<Stock>(Stock.class));
	}
}
