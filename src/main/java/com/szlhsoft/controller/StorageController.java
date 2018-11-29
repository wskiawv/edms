package com.szlhsoft.controller;

import com.szlhsoft.core.controller.BaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
*@Author: he
*@Description
*@Date:2018/11/28 23:21
*@Modify
**/
public class StorageController extends BaseController {
    @GetMapping(value = "")
    public Object search(@RequestParam(value = "pageSize", defaultValue = "10") int page,@RequestParam(value = "currentPage", defaultValue = "1") int limit){
        return null;
    }
}
