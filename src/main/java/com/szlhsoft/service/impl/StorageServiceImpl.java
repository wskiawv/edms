package com.szlhsoft.service.impl;

import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.dao.StorageMapper;
import com.szlhsoft.model.Storage;
import com.szlhsoft.service.IStorageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:20
*@Modify
**/
@Service
public class StorageServiceImpl implements IStorageService {
    @Resource
    private StorageMapper storageDao;
    @Override
    public Page search(Map params) {
        Page page=new Page(params);
        params.put("start", page.getStart());
        params.put("limit",page.getLimit());
        Long count=storageDao.count(params);
        List<Storage> list=storageDao.find(params);
        page.setTotalCount(count);
        page.setResult(list);
        return page;
    }

    @Override
    public PageBean<Storage> find(Map params) {
        return null;
    }

    @Override
    public List<Storage> exportData(Map params) {
        return null;
    }

    @Override
    public void importData(List<Storage> list) {

    }

    @Override
    public Storage save(Storage o) {
        return null;
    }

    @Override
    public void delete(Storage o) {

    }

    @Override
    public Storage update(Storage o) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
