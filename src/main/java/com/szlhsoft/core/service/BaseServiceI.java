package com.szlhsoft.core.service;

import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;

import java.util.List;
import java.util.Map;
/**
* create by he 2018/11/29 10:45
*
**/
public interface BaseServiceI<T> {
    Page search(Map params);
    PageBean<T> find(Map params);
    PageInfo<T> select(Map params);
    List<T> output(Map params);
    void input(List<T> list);
    T save(T o);
    void delete(T o);
    T update(T o);
    void delete(Integer id);
}
