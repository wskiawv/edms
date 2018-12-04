package com.szlhsoft.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.dao.AttachmentMapper;
import com.szlhsoft.model.Attachment;
import com.szlhsoft.service.IAttachmentService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:19
*@Modify
**/
public class AttachmentServiceImpl implements IAttachmentService {
    @Resource
    private AttachmentMapper attachmentDao;
    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean<Attachment> find(Map params) {
        return null;
    }

    @Override
    public PageInfo<Attachment> select(Map params) {
        Integer pageSize= (Integer) params.get("pageSize");
        Integer page= (Integer) params.get("currentPage");
        PageHelper.startPage(page, pageSize);
        List<Attachment> list=attachmentDao.select(params);
        PageInfo<Attachment> pageInfo=new PageInfo<>(list);
        return pageInfo;
    }

    @Override
    public List<Attachment> output(Map params) {
        return null;
    }

    @Override
    public void input(List<Attachment> list) {

    }

    @Override
    public Attachment save(Attachment o) {
        return null;
    }

    @Override
    public void delete(Attachment o) {

    }

    @Override
    public Attachment update(Attachment o) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
