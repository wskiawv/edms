package com.szlhsoft.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.dao.ResourcesMapper;
import com.szlhsoft.model.Resources;
import com.szlhsoft.service.IResourcesService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
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
    @Resource
    private ResourcesMapper resourcesDao;
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
    public PageInfo<Resources> select(Map params) {
        Integer pageSize= (Integer) params.get("pageSize");
        Integer page= (Integer) params.get("currentPage");
        PageHelper.startPage(page, pageSize);
        List<Resources> list=resourcesDao.select(params);
        PageInfo<Resources>pageInfo=new PageInfo<>(list);
        return pageInfo;
    }

    @Override
    public List<Resources> output(Map params) {
        return null;
    }

    @Override
    public void input(List<Resources> list) {

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
