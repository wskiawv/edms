package com.szlhsoft.dao;

import com.szlhsoft.core.dao.BaseDaoI;
import com.szlhsoft.model.Attachment;

public interface AttachmentMapper extends BaseDaoI<Attachment> {
    int deleteByPrimaryKey(Integer id);

    int insert(Attachment record);

    int insertSelective(Attachment record);

    Attachment selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Attachment record);

    int updateByPrimaryKey(Attachment record);
}