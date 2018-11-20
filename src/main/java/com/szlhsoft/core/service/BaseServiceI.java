package com.szlhsoft.core.service;

import com.szlhsoft.core.model.Page;

import java.util.List;
import java.util.Map;

public interface BaseServiceI<T> {

    Page search(Map params);
    List<T> exportData(Map params);
    void importData(List<T> list);
}
