package com.cv.stock.stockservice;
public class Stock {
	 
	private String symbol;
	private String open;
	private String high;
	private String close;
	private String low;
	private String volume;

	
	public String getClose() {
		return close;
	}

	public void setClose(String close) {
		this.close = close;
	}

	public String getLow() {
		return low;
	}

	public void setLow(String low) {
		this.low = low;
	}

	public String getOpen() {
		return open;
	}

	public void setOpen(String open) {
		this.open = open;
	}

	public String getHigh() {
		return high;
	}

	public void setHigh(String high) {
		this.high = high;
	}

	public String getVolume() {
		return volume;
	}

	public void setVolume(String volume) {
		this.volume = volume;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	
	
	 
	}