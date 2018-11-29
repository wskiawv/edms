package com.szlhsoft.core.model;

import java.util.List;
import java.util.Map;
/**
* create by he 2018/11/29 10:46
* extjs分页
**/
public class Page<T> implements java.io.Serializable{
	public static final String ASC = "asc";
	public static final String DESC = "desc";
	private Integer start;
	private Integer limit;
	private Integer page=1;
	private Long totalCount;
	private String orderBy = null;
	private String order = null;

	private List<T> result;
	
	
	public Page(Map<String,Object> params) {	
		if(params.containsKey("start") && params !=null && !params.get("start").toString().equals(""))
		{
			this.start =Integer.valueOf((String) params.get("start"));
		}
		if(this.start==null){
			this.start = Integer.valueOf(0);
		}
		if(params.containsKey("limit") && params !=null && !params.get("limit").toString().equals(""))
		{
			this.limit=Integer.valueOf((String) params.get("limit"));
		}
		if(this.limit==null){
			this.limit=Integer.valueOf(20);
		}
		if(params.containsKey("page") && params.get("page")!=null){
			this.page=Integer.valueOf((String) params.get("page"));
		}else{
			this.page=1;
		}
		if(this.start.intValue()==0){

			if (this.page != null) {
				this.start = Integer.valueOf((this.page.intValue() - 1) * this.limit.intValue());
			}
		}

		
	}
	
	public Page(Integer start, Integer limit) {
		
		this.start = start;
		this.limit = limit;
	}

	public Integer getStart() {
		return start;
	}

	public void setStart(Integer start) {
		this.start = start;
	}

	public Integer getLimit() {
		return limit;
	}

	public void setLimit(Integer limit) {
		this.limit = limit;
	}

	public Long getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(Long totalCount) {
		this.totalCount = totalCount;
	}

	public String getOrderBy() {
		return orderBy;
	}

	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}

	public String getOrder() {
		return order;
	}

	public void setOrder(String order) {
		this.order = order;
	}

	public List<T> getResult() {
		return result;
	}

	public void setResult(List<T> result) {
		this.result = result;
	}

	public static String getAsc() {
		return ASC;
	}

	public static String getDesc() {
		return DESC;
	}
	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}
}
