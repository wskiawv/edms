package com.szlhsoft.dao;

import com.szlhsoft.core.dao.BaseDaoI;
import com.szlhsoft.model.Document;

public interface DocumentMapper extends BaseDaoI<Document> {
    int deleteByPrimaryKey(Integer id);

    int insert(Document record);

    int insertSelective(Document record);

    Document selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Document record);

    int updateByPrimaryKey(Document record);
}