# 找幫手 App

# 設定開發環境
* 第一種方法, 安裝 GitHub Desktop 後按 Github 網頁右下角 "Clone in Desktop" 按鈕
* 第二種方法, 先打開命令列執行下面指令.
~~~
    > git clone https://github.com/ericyuTestrite/jabanso-app.git
~~~

## 增加 Plugin, 要執行
~~~
    > cd cd jabanso-app
    > cordova plugin add com.ionic.keyboard
    > cordova plugin add cordova-plugin-console
    > cordova plugin add cordova-plugin-device
    > cordova plugin add cordova-plugin-splashscreen
    > cordova plugin add cordova-plugin-whitelist
~~~

## 增加 Bower, 要執行
~~~
    > cd jabanso-app
    > bower install angular-base64-upload
~~~

## 設定為支援 Android 

     > cd jabanso-app
     > cordova platform add android

## 建立 Icon 及 Splash 
要先確認 resources 目錄已經存在 
* icon.png (2048 x 2048 px)
* splash.png (2208 x 2208 px)
~~~
     > cd jabanso-app
     > ionic resources
~~~
## 佈署到 Android, 需先將手機開啟開發模式, 
     > ionic run android --device
     
## HTML APP Web Preview
     > cd jabanso-app
     > ionic serve
## 色調 
* 底色(綠):  #3caa91
* 文字(黃):  #ffc000

***

# 資料結構
## Local App
| Type        | Key or Table  Name        | Example  |
| ------ |:-------:|:-----------|
| localStorage | profile |```{"joinDate":"2015/10/5", "seniority":"1", "helperName":"Eric", "serviceScope":"我的服務內容", "address":"台北市內湖區"}```|
## Server
| DB        | Collection Name        | 說明  |結構|
| ------------- |:-------------:|:-----|:-----|
| jabanso | members |會員資料|```{"memberId": 123456, "username":"ericyu", "email":"eric.yu@testritegroup.com", "password": "hashed...", "avatar": "images/myAvator.png", "contactTel":""}```|

***

# 程式架構
* Routing 設定
  1. 畫面及 contorller 的關係全部在**app.js**設定
* Controllers 
  1. **controller.js** - 主要畫面的 routing
  2. **joinController.js** - 加入會員
* Services
  1. 與畫面無關的業務邏輯
  2. 遠端服務
  3. 資料處理
