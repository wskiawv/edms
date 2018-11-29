package com.szlhsoft.dao;

import com.szlhsoft.core.dao.BaseDaoI;
import com.szlhsoft.model.Storage;

public interface StorageMapper extends BaseDaoI<Storage> {
    int deleteByPrimaryKey(Integer id);

    int insert(Storage record);

    int insertSelective(Storage record);

    Storage selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Storage record);

    int updateByPrimaryKey(Storage record);
}