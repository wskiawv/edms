package com.szlhsoft.core.dao;

import java.util.List;
import java.util.Map;

public interface BaseDaoI<T> {
    Long count(Map params);
    List<T> find(Map params);
    List<T> select(Map params);
    int insert(T obj);
    int delete(T obj);
    void deleteAll();
    Long remove(Long id);
    int update(T obj);
}
