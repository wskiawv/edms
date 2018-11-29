package com.szlhsoft.dao;

import com.szlhsoft.core.dao.BaseDaoI;
import com.szlhsoft.model.User;

public interface UserMapper extends BaseDaoI<User> {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}