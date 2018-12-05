package com.szlhsoft.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.dao.CatalogMapper;
import com.szlhsoft.model.Catalog;
import com.szlhsoft.service.ICatalogService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:18
*@Modify
**/
public class CatalogServiceImpl implements ICatalogService {
    @Resource
    private CatalogMapper catalogDao;

    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean<Catalog> find(Map params) {
        return null;
    }

    @Override
    public PageInfo<Catalog> select(Map params) {
        Integer pageSize= (Integer) params.get("pageSize");
        Integer page= (Integer) params.get("currentPage");
        PageHelper.startPage(page, pageSize);
        List<Catalog>list = catalogDao.select(params);
        PageInfo<Catalog> pageInfo= new PageInfo<>(list);
        return pageInfo;
    }

    @Override
    public List<Catalog> output(Map params) {
        return null;
    }

    @Override
    public void input(List<Catalog> list) {

    }

    @Override
    public Catalog save(Catalog o) {
        catalogDao.insertSelective(o);
        return o;
    }

    @Override
    public void delete(Catalog o) {
        catalogDao.delete(o);
    }

    @Override
    public Catalog update(Catalog o) {
        catalogDao.update(o);
        return o;
    }

    @Override
    public void delete(Integer id) {
        catalogDao.deleteByPrimaryKey(id);
    }
}
