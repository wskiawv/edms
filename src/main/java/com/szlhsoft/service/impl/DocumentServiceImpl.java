package com.szlhsoft.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.dao.DocumentMapper;
import com.szlhsoft.model.Catalog;
import com.szlhsoft.model.Document;
import com.szlhsoft.service.IDocumentService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:19
*@Modify
**/
public class DocumentServiceImpl implements IDocumentService {
    @Resource
    private DocumentMapper documentDao;

    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean<Document> find(Map params) {
        return null;
    }

    @Override
    public PageInfo<Document> select(Map params) {
        Integer pageSize= (Integer) params.get("pageSize");
        Integer page= (Integer) params.get("currentPage");
        PageHelper.startPage(page, pageSize);
        List<Document> list=documentDao.select(params);
        PageInfo<Document> pageInfo= new PageInfo<>(list);
        return pageInfo;
    }

    @Override
    public List<Document> exportData(Map params) {
        return null;
    }

    @Override
    public void importData(List<Document> list) {

    }

    @Override
    public Document save(Document o) {
        return null;
    }

    @Override
    public void delete(Document o) {

    }

    @Override
    public Document update(Document o) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
