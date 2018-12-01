package com.szlhsoft.controller;

import com.szlhsoft.core.annotation.Method;
import com.szlhsoft.core.controller.BaseController;
import com.szlhsoft.model.Storage;
import com.szlhsoft.service.IStorageService;
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
public class StorageController extends BaseController {
    @Resource
    private IStorageService iStorageService;
    @RequestMapping(value="/save", method= RequestMethod.POST)
    @ResponseBody
    @Method(name="保存")
    public Object save(Storage storage){
       return super.save(iStorageService.save(storage));
    }
    @GetMapping(value = "")
    public Object search(@RequestParam(value = "pageSize", defaultValue = "10") int pageSize,@RequestParam(value = "currentPage", defaultValue = "1") int currentPage){
        Map<String,Object> params=new HashMap<>();
        params.put("pageSize",pageSize);
        params.put("currentPage",currentPage);
        return iStorageService.find(params);
    }
}
