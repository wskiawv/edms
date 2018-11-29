package com.szlhsoft.service;

import com.szlhsoft.core.service.BaseServiceI;
import com.szlhsoft.model.Resources;

import java.util.Map;
/**
*@Author: he
*@Description
*@Date:2018/11/28 23:20
*@Modify
**/
public interface IResourcesService extends BaseServiceI<Resources> {
    public Map<String, Object> initResources();
    public Map<String,Object> getResources();
}
