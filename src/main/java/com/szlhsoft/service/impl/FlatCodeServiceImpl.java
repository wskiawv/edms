package com.szlhsoft.service.impl;

import com.szlhsoft.core.model.Page;
import com.szlhsoft.core.model.PageBean;
import com.szlhsoft.model.FlatCode;
import com.szlhsoft.service.IFlatCodeService;
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
public class FlatCodeServiceImpl implements IFlatCodeService {
    @Override
    public void initFlatCode() {

    }

    @Override
    public List<FlatCode> getFlatCode() {
        return null;
    }

    @Override
    public void resetFlatCode() {

    }

    @Override
    public Page search(Map params) {
        return null;
    }

    @Override
    public PageBean<FlatCode> find(Map params) {
        return null;
    }

    @Override
    public List<FlatCode> exportData(Map params) {
        return null;
    }

    @Override
    public void importData(List<FlatCode> list) {

    }

    @Override
    public FlatCode save(FlatCode o) {
        return null;
    }

    @Override
    public void delete(FlatCode o) {

    }

    @Override
    public FlatCode update(FlatCode o) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }
}
