package com.szlhsoft.service.impl;

import com.szlhsoft.core.model.Page;
import com.szlhsoft.model.FlatCode;
import com.szlhsoft.service.IFlatCodeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
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
    public List<FlatCode> exportData(Map params) {
        return null;
    }

    @Override
    public void importData(List<FlatCode> list) {

    }
}
