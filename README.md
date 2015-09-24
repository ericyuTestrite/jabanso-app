# 找幫手 App

# 設定開發環境
* 第一種方法, 安裝 GitHub Desktop 後按 Github 網頁右下角 "Clone in Desktop" 按鈕
* 第二種方法, 先打開命令列執行下面指令.
~~~
    > git clone https://github.com/ericyuTestrite/jabanso-app.git
~~~

# 增加 Plugin, 要執行
~~~
    > cordova plugin add com.ionic.keyboard
    > cordova plugin add cordova-plugin-console
    > cordova plugin add cordova-plugin-device
    > cordova plugin add cordova-plugin-splashscreen
    > cordova plugin add cordova-plugin-whitelist
~~~

# 設定為支援 Android 

     > cd jabanso-app
     > ionic platform add android

# 建立 Icon 及 Splash 
要先確認 resources 目錄已經存在 
* icon.png (2048 x 2048 px)
* splash.png (2208 x 2208 px)
~~~
     > cd jabanso-app
     > ionic resources
~~~
# 佈署到 Android, 需先將手機開啟開發模式, 
     > ionic run android --device
     
# HTML APP Web Preview
     > cd jabanso-app
     > ionic serve
# 色調 
* 底色(綠):  #3caa91
* 文字(黃):  #ffc000
