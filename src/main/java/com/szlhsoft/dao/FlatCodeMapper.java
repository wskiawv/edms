package com.szlhsoft.dao;

import com.szlhsoft.model.FlatCode;

public interface FlatCodeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FlatCode record);

    int insertSelective(FlatCode record);

    FlatCode selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FlatCode record);

    int updateByPrimaryKey(FlatCode record);
}