package com.szlhsoft.controller;

import com.szlhsoft.core.annotation.Ctl;
import com.szlhsoft.core.annotation.Method;
import com.szlhsoft.core.controller.BaseController;
import com.szlhsoft.core.model.Message;
import com.szlhsoft.model.Storage;
import com.szlhsoft.service.IStorageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:21
*@Modify
**/
@Controller
@RequestMapping("/sys/StorageController")
@Ctl(name="存储")
public class StorageController extends BaseController {
    @Resource
    private IStorageService iStorageService;
    @RequestMapping(value="/save", method= {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    @Method(name="保存")
    public Object save(Storage storage){
        Message message=new Message();
        try{
            message.setSuccess(true);
            message.setTitle(super.getLangMessage("message.title"));
            message.setContent(super.getLangMessage("message.content.add.success"));
            iStorageService.save(storage);
            message.setResult(storage);
        }catch (Exception e){
            message.setSuccess(false);
            message.setContent(super.getLangMessage("message.content.add.fail"));
        }
       return message;
    }
    @RequestMapping(value="/delete", method={RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    @Method(name="删除")
    public Object delete(@RequestParam(value="id",required=true,defaultValue="0") Integer id) {
        Message message=new Message();
        try {
            message.setSuccess(true);
            message.setTitle(super.getLangMessage("message.title"));
            message.setContent(super.getLangMessage("message.content.delete.success"));
            iStorageService.delete(id);
            message.setResult(null);
        }catch (Exception e){
            message.setSuccess(false);
            message.setContent(super.getLangMessage("message.content.delete.fail"));
        }
        return message;
    }
    @RequestMapping(value="/update", method=RequestMethod.POST)
    @ResponseBody
    @Method(name="更新")
    public Object update(Storage storage){
        Message message=new Message();
        try {
            message.setSuccess(true);
            message.setTitle(super.getLangMessage("message.title"));
            message.setContent(super.getLangMessage("message.content.update.success"));
            iStorageService.update(storage);
        }catch (Exception e){
            message.setSuccess(false);
            message.setContent(super.getLangMessage("message.content.update.fail"));
        }
        return message;
    }
    @GetMapping(value = "/search")
    @ResponseBody
    @Method(name="查询")
    public Object search(@RequestParam(value = "pageSize", defaultValue = "10") int pageSize,@RequestParam(value = "currentPage", defaultValue = "1") int currentPage){
        Map<String,Object> params=new HashMap<>();
        params.put("pageSize",pageSize);
        params.put("currentPage",currentPage);
        return iStorageService.find(params);
    }
    @GetMapping(value = "/find")
    @ResponseBody
    @Method(name="查找")
    public Object find(@RequestParam(value = "pageSize", defaultValue = "10") int pageSize,@RequestParam(value = "currentPage", defaultValue = "1") int currentPage){
        Map<String,Object> params=new HashMap<>();
        params.put("pageSize",pageSize);
        params.put("currentPage",currentPage);
        return iStorageService.select(params);
    }
}
