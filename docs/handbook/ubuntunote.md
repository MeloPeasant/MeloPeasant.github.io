---
title: Ubuntu笔记
author: 麻瓜【码瓜】
date: '2024-07-22'
---  
## 生成UUID
```
cat /proc/sys/kernel/random/uuid
```  
  
## 提取Json字段  
``` 
jq '{字段}' file.json > newfile.json
```  

## 压缩与解压   
### tar.gz  
  
压缩文件  
```tar -zcvf archive.tar.gz directory```   
* -z: 表示要使用 gzip 进行压缩。  
* -c: 表示创建新的归档文件。  
* -v: 表示详细输出，列出被添加到归档中的文件。  
* -f: archive.tar.gz: 指定归档文件的名称为 archive.tar.gz。   
   
解压文件    
```tar -zxvf archive.tar.gz```    
* -z: 表示要使用 gzip 解压归档文件。  
* -x: 表示解压操作。  
* -v: 表示详细输出，列出被解压的文件。  
* -f: example.tar.gz: 指定要解压的归档文件的名称为 example.tar.gz。  