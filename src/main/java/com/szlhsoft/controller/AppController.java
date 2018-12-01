package com.szlhsoft.controller;

import com.sun.xml.internal.rngom.parse.host.Base;
import com.szlhsoft.core.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
/**
*@Author: he
*@Description
*@Date:2018/11/28 23:21
*@Modify
**/
@Controller
public class AppController extends BaseController {
    /**
     * 首页
     *
     * @return
     */
    @GetMapping(value = {"/", "index"})
    public String index() {
        return "admin/index";
    }
}
