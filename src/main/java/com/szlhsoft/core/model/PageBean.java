package com.szlhsoft.core.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
* create by he 2018/11/29 10:45
e前端页面angularjs jquery bootstrap分页
**/
public class PageBean<T> implements Serializable {
	private List<T> list;

	private int allRow;

	private int totalPage;

	private int currentPage;

	private int pageSize;

	private boolean isFirstPage;

	private boolean isLastPage;

	private boolean hasPreviousPage;

	private boolean hasNextPage;
    
	private Map pageQueryMap;

	public List getPageBar() {
		List list = new ArrayList();
		int cp = currentPage;
		if(totalPage<=5){
			for(int i=1;i<=totalPage;i++){
				PageBarLink pbl = new PageBarLink(new Integer(i).toString(),"1");
				list.add(pbl);
			}
		}else{
			if(cp<=3){
				for(int i=1;i<=5;i++){
					PageBarLink pbl = new PageBarLink(new Integer(i).toString(),"1");
					list.add(pbl);
				}
				PageBarLink pbl = new PageBarLink("...","2");
				list.add(pbl);
				pbl = new PageBarLink(new Integer(totalPage).toString(),"1");
				list.add(pbl);
			}else if(cp>3&&cp<totalPage-2){
				PageBarLink pbl = new PageBarLink("1","1");
				list.add(pbl);
				pbl = new PageBarLink("...","2");
				list.add(pbl);
				for(int i=cp-2;i<=cp+2;i++){
					pbl = new PageBarLink(new Integer(i).toString(),"1");
					list.add(pbl);
				}
				pbl = new PageBarLink("...","2");
				list.add(pbl);
				pbl = new PageBarLink(new Integer(totalPage).toString(),"1");
				list.add(pbl);
			}else if(cp>=totalPage-2){
				PageBarLink pbl = new PageBarLink("1","1");
				list.add(pbl);
				pbl = new PageBarLink("...","2");
				list.add(pbl);
				for(int i=totalPage-4;i<=totalPage;i++){
					pbl = new PageBarLink(new Integer(i).toString(),"1");
					list.add(pbl);
				}
			}
		}
		return list;
	}
	class PageBarLink{
		private String text;
		private String type;
		
		public PageBarLink(String text,String type){
			this.text=text;
			this.type=type;
		}
		public String getText() {
			return text;
		}
		public void setText(String text) {
			this.text = text;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		
	}
	public List<T> getList() {
		return list;
	}

	public void setList(List<T> list) {
		this.list = list;
	}

	public int getAllRow() {
		return allRow;
	}

	public void setAllRow(int allRow) {
		this.allRow = allRow;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public void setFirstPage(boolean isFirstPage) {
		this.isFirstPage = isFirstPage;
	}

	public void setLastPage(boolean isLastPage) {

		this.isLastPage = isLastPage;

	}

	public void setHasPreviousPage(boolean hasPreviousPage) {

		this.hasPreviousPage = hasPreviousPage;

	}

	public void setHasNextPage(boolean hasNextPage) {

		this.hasNextPage = hasNextPage;

	}

	public void init() {

		this.isFirstPage = isFirstPage();

		this.isLastPage = isLastPage();

		this.hasPreviousPage = isHasPreviousPage();
		this.hasNextPage = isHasNextPage();

	}

	public boolean isFirstPage() {

		return currentPage == 1;

	}

	public boolean isLastPage() {
		return currentPage == totalPage;
	}

	public boolean isHasPreviousPage() {
		return currentPage != 1;
	}

	public boolean isHasNextPage() {
		return currentPage != totalPage;

	}
	
	public Map getPageQueryMap() {
		return pageQueryMap;
	}

	public void setPageQueryMap(Map pageQueryMap) {
		this.pageQueryMap = pageQueryMap;
	}

	public static int countTotalPage(final int pageSize, final int allRow) {

		int totalPage = allRow % pageSize == 0 ? allRow / pageSize : allRow
				/ pageSize + 1;
		return totalPage;

	}

	public static int countOffset(final int pageSize, final int currentPage) {

		final int offset = pageSize * (currentPage - 1);
		return offset;
	}

	public static int countCurrentPage(int page) {
		final int curPage = (page == 0 ? 1 : page);
		return curPage;
	}

}
