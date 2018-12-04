package com.szlhsoft.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
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
 * @Author: he
 * @Description
 * @Date:2018/11/28 23:20
 * @Modify
 **/
@Service
public class StorageServiceImpl implements IStorageService {
    @Resource
    private StorageMapper storageDao;

    @Override
    public Page search(Map params) {
        Page page = new Page(params);
        params.put("start", page.getStart());
        params.put("limit", page.getLimit());
        Long count = storageDao.count(params);
        List<Storage> list = storageDao.find(params);
        page.setTotalCount(count);
        page.setResult(list);
        return page;
    }

    @Override
    public PageBean<Storage> find(Map params) {
        Long count = storageDao.count(params);
        List<Storage> list = storageDao.find(params);
        Integer pageSize = (Integer) params.get("pageSize");
        Integer page = (Integer) params.get("currentPage");
        int totalPage = PageBean.countTotalPage(pageSize, Integer.valueOf(count.toString()));
        PageBean pageBean = new PageBean();
        pageBean.setPageSize(pageSize);
        pageBean.setCurrentPage(page);
        pageBean.setAllRow(Integer.valueOf(count.toString()));
        pageBean.setTotalPage(totalPage);
        pageBean.setList(list);
        pageBean.init();
        return pageBean;
    }

    @Override
    public PageInfo<Storage> select(Map params) {
        Integer pageSize = (Integer) params.get("pageSize");
        Integer page = (Integer) params.get("currentPage");
        PageHelper.startPage(page, pageSize);
        List<Storage> list = storageDao.find(params);
        PageInfo<Storage> pageInfo = new PageInfo<>(list);
        return pageInfo;
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
        storageDao.insertSelective(o);
        return o;
    }

    @Override
    public void delete(Storage o) {
        storageDao.delete(o);
    }

    @Override
    public Storage update(Storage o) {
        storageDao.update(o);
        return o;
    }

    @Override
    public void delete(Integer id) {
        storageDao.deleteByPrimaryKey(id);
    }
}
