package com.szlhsoft.core.dao;

import java.util.List;
import java.util.Map;

public interface BaseDaoI<T> {
    public Long count(Map params);
    public List<T> find(Map params);
    int insert(T obj);
    int delete(T obj);
    void deleteAll();
    Long remove(Long id);
    int update(T obj);
}
