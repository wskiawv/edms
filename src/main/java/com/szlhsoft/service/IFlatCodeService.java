package com.szlhsoft.service;

import com.szlhsoft.core.service.BaseServiceI;
import com.szlhsoft.model.FlatCode;

import java.util.List;

public interface IFlatCodeService extends BaseServiceI<FlatCode> {
    public void initFlatCode();
    public List<FlatCode> getFlatCode();
    void resetFlatCode();
}
