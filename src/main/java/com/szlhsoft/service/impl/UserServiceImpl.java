package com.szlhsoft.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.dao.UserMapper;
import com.szlhsoft.model.User;
import com.szlhsoft.service.IUserService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:20
*@Modify
**/
public class UserServiceImpl implements IUserService {
    @Resource
    private UserMapper userDao;
    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean<User> find(Map params) {
        return null;
    }

    @Override
    public PageInfo<User> select(Map params) {
        Integer pageSize = (Integer) params.get("pageSize");
        Integer page = (Integer) params.get("currentPage");
        PageHelper.startPage(page, pageSize);
        List<User>list = userDao.select(params);
        PageInfo<User> pageInfo = new PageInfo<>(list);
        return pageInfo;
    }

    @Override
    public List<User> output(Map params) {
        return null;
    }

    @Override
    public void input(List<User> list) {

    }

    @Override
    public User save(User o) {
        userDao.insertSelective(o);
        return o;
    }

    @Override
    public void delete(User o) {
        userDao.delete(o);
    }

    @Override
    public User update(User o) {
        userDao.updateByPrimaryKey(o);
        return null;
    }

    @Override
    public void delete(Integer id) {
        userDao.deleteByPrimaryKey(id);
    }
}
