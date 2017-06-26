package com.slokam.an;



import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class AsynDataController {
  
	@RequestMapping("getStr")
	public @ResponseBody String getStr(){
	  return "Hellloo this is from AsynDataController";
    }
	
	
	@RequestMapping("getListOfStr")
	public @ResponseBody List<String> getListOfStr(){
		List<String> list = new ArrayList<>();
		list.add("one");
		list.add("two");
		list.add("three");
		list.add("four");
		
	  return list;
    }
	
	
	@RequestMapping("getListOfObjs")
	public @ResponseBody List<StudentPojo> getListOfObjs(){
		StudentPojo std1 = new StudentPojo();
		std1.setAdd("add1");
		std1.setId(1);
		std1.setName("Name1");
		
		StudentPojo std2 = new StudentPojo();
		std2.setAdd("add2");
		std2.setId(2);
		std2.setName("Name2");
		
		StudentPojo std3 = new StudentPojo();
		std3.setAdd("add3");
		std3.setId(3);
		std3.setName("Name3");
		
		
		List<StudentPojo> list = new ArrayList<>();
		list.add(std1);
		list.add(std2);
		list.add(std3);
		
	  return list;
    }
	
	@RequestMapping("getprofile")
	public  @ResponseBody CustomerProfileDetailspojo getprofileData()
	{
		CustomerProfileDetailspojo cpd=new CustomerProfileDetailspojo();
		cpd.setName("Naresh");
		cpd.setNickname("chinna");
		cpd.setPanno("abc123");
		cpd.setContactno(9652764);
		return cpd;
		
	}
	@RequestMapping("setstr")
	public @ResponseBody void setStr(String nickname)
	{
		System.out.println("Nick Name is::"+nickname);
	}
	@RequestMapping("setstr1")
	public @ResponseBody void setStr1(String panno)
	{
		System.out.println("PAN NO is::"+panno);
	}
	@RequestMapping("setObj")
	public @ResponseBody void setObj(@RequestBody ProfileOtherInfo obj)
	{
		System.out.println(obj);
	}
	
	
	
	
}

