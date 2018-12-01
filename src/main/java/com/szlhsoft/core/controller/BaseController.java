package com.szlhsoft.core.controller;

import com.szlhsoft.core.model.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);

    public Object save(Object o){
        Message message=new Message();
        message.setResult(o);
        return message;
    }
    public Object delete(Object o){
        Message message=new Message();
        message.setResult(o);
        return message;
    }
    public Object update(Object o){
        Message message=new Message();
        message.setResult(o);
        return message;
    }

}
