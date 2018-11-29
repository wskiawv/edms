package com.szlhsoft.service.impl;

import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.model.Resources;
import com.szlhsoft.service.IResourcesService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
/**
*@Author: he
*@Description
*@Date:2018/11/28 23:19
*@Modify
**/
@Service
public class ResourcesServiceImpl implements IResourcesService {
    @Override
    public Map<String, Object> initResources() {
        return null;
    }

    @Override
    public Map<String, Object> getResources() {
        return null;
    }

    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean<Resources> find(Map params) {
        return null;
    }

    @Override
    public List<Resources> exportData(Map params) {
        return null;
    }

    @Override
    public void importData(List<Resources> list) {

    }

    @Override
    public Resources save(Resources o) {
        return null;
    }

    @Override
    public void delete(Resources o) {

    }

    @Override
    public Resources update(Resources o) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
