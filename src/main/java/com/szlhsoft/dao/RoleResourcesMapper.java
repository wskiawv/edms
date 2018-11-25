package com.szlhsoft.dao;

import com.szlhsoft.model.RoleResources;

public interface RoleResourcesMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(RoleResources record);

    int insertSelective(RoleResources record);

    RoleResources selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(RoleResources record);

    int updateByPrimaryKey(RoleResources record);
}