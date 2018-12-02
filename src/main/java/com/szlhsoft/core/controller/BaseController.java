package com.szlhsoft.core.controller;

import com.szlhsoft.core.model.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;

import javax.annotation.Resource;
import java.util.Locale;

public abstract class BaseController {
    private static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);
    public Locale locale= LocaleContextHolder.getLocale();
    @Resource
    public  MessageSource messageSource;
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

    /**
     * 获取国际化配置信息
     * @param code
     * @return
     */
    public String getLangMessage(String code ){
        return messageSource.getMessage(code,null,locale);
    }

}
