package com.szlhsoft.core.service;

import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/9/19.
 */
public class BaseService implements BaseServiceI {
    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean find(Map params) {
        return null;
    }

    @Override
    public PageInfo select(Map params) {
        return null;
    }

    @Override
    public List output(Map params) {
        return null;
    }

    @Override
    public void input(List list) {

    }

    @Override
    public Object save(Object o) {
        return o;
    }

    @Override
    public void delete(Object o) {

    }

    @Override
    public Object update(Object o) {
        return o;
    }

    @Override
    public void delete(Integer id) {

    }


}