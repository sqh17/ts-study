* 安装
`npm install -g typescript`
* 初始化ts.config问题
mac 在实行`tsc --init`时，报`bash: tsc: command not found`
解决办法：
1. 输入`cd ~/` 进入当前用户的home目录
2. 打开并编辑bash_profile 执行命令
`open .bash_profile`,若没有的话，则`touch .bash_profile`创建
3. 在 bash_profile 文件中
有两种方式：
  * 
    
    export PATH=/usr/local/bin:$PATH
    export M3_HOME=/usr/local/Cellar/maven@3.3/3.3.9
    export PATH=$PATH:$M3_HOME/bin

这个是后面添加`export PATH=你安装的ts的目录，指向bin的`,在安装时终端会提示，比如`/usr/local/Cellar/node/8.0.0_1/lib/node_modules/typescript/bin/`
  * 

    PATH=$PATH:/usr/local/mysql/bin:/usr/local/Cellar/node/8.0.0_1/lib/node_modules/typescript/bin/

这个是在后面添加`:你安装的ts的目录，指向bin的`，只要前面有路径，直接用:隔开
4. 然后保存，关闭
5. 运行`source .bash_profile`
6. 再运行`tsc --init`，出现`message TS6071: Successfully created a tsconfig.json file.` 代表成功





