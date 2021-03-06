package com.ku6ads.dao.entity.statistics;

import java.util.Date;

public class StatisticsAdvertisementViewsMonth extends com.ku6ads.dao.entity.ExtEntity {

	private Integer id;
	private Integer advertisementId;
	private Date updateTime;
	private String onceMore;
	private String twiceMore;
	private String threeMore;
	private String fourthMore;
	private String fiveMore;
	private String sixMore;
	private String sevenMore;
	private String eightMore;
	private String nineMore;
	private String teenMore;
	private Date stateDayTime;
	private Date stateMonthTimeStart;
	private Date stateMonthTimeEnd;
	private String name;
	
	
	public Date getStateDayTime() {
		return stateDayTime;
	}
	public void setStateDayTime(Date stateDayTime) {
		this.stateDayTime = stateDayTime;
	}
	public Date getStateMonthTimeStart() {
		return stateMonthTimeStart;
	}
	public void setStateMonthTimeStart(Date stateMonthTimeStart) {
		this.stateMonthTimeStart = stateMonthTimeStart;
	}
	public Date getStateMonthTimeEnd() {
		return stateMonthTimeEnd;
	}
	public void setStateMonthTimeEnd(Date stateMonthTimeEnd) {
		this.stateMonthTimeEnd = stateMonthTimeEnd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getId() {
		return this.id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getAdvertisementId() {
		return this.advertisementId;
	}
	public void setAdvertisementId(Integer advertisementId) {
		this.advertisementId = advertisementId;
	}

	public Date getUpdateTime() {
		return this.updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getOnceMore() {
		return this.onceMore;
	}
	public void setOnceMore(String onceMore) {
		this.onceMore = onceMore;
	}

	public String getTwiceMore() {
		return this.twiceMore;
	}
	public void setTwiceMore(String twiceMore) {
		this.twiceMore = twiceMore;
	}

	public String getThreeMore() {
		return this.threeMore;
	}
	public void setThreeMore(String threeMore) {
		this.threeMore = threeMore;
	}

	public String getFourthMore() {
		return this.fourthMore;
	}
	public void setFourthMore(String fourthMore) {
		this.fourthMore = fourthMore;
	}

	public String getFiveMore() {
		return this.fiveMore;
	}
	public void setFiveMore(String fiveMore) {
		this.fiveMore = fiveMore;
	}

	public String getSixMore() {
		return this.sixMore;
	}
	public void setSixMore(String sixMore) {
		this.sixMore = sixMore;
	}

	public String getSevenMore() {
		return this.sevenMore;
	}
	public void setSevenMore(String sevenMore) {
		this.sevenMore = sevenMore;
	}

	public String getEightMore() {
		return this.eightMore;
	}
	public void setEightMore(String eightMore) {
		this.eightMore = eightMore;
	}

	public String getNineMore() {
		return this.nineMore;
	}
	public void setNineMore(String nineMore) {
		this.nineMore = nineMore;
	}

	public String getTeenMore() {
		return this.teenMore;
	}
	public void setTeenMore(String teenMore) {
		this.teenMore = teenMore;
	}

}