export default {
    // 生成随机位置音符时使用，输入起始和终止，返回这个区间内的随机数
    randomInt(s,e){
      let d = e - s;
      if(d<0) return s;
      else{
          let r = Math.random() * d + s;
          r = parseInt(r,10)
          return r
        }
      
    },
    // 点击全屏时触发
    fullScreen(){
        // 做兼容性操作
        var element = document.documentElement
        // 判断是否支持ActiveXObject控件,执行操作是element.requestFullscreen()
        if(window.ActiveXObject) {
            // 使用ActiveXObject控件调用本地程序
            var WsShell = new ActiveXObject('WScript.Shell')
            WsShell.SendKeys('{F11}')
        // 判断该浏览器是否具有requestFullscreen方法
        } else if(element.requestFullscreen){
            element.requestFullscreen()
        // IE浏览器
        } else if(element.msRequestFullscreen){
            element.msRequestFullscreen()
        // 谷歌/苹果浏览器
        } else if(element.webkitRequestFullscreen){
            element.webkitRequestFullscreen()
        // 火狐浏览器
        } else if(element.mosRequestFullscreen){
            element.mosRequestFullscreen();
        }
    },
    fullExit(){
        var element  = document.documentElement
        // 判断是否支持用element.request
        if(window.ActiveXObject){
            var WsShell = new ActiveXObject('WScript.Shell')
            WsShell.SendKeys('{F11}')
        }else if(element.requestFullscreen){
            document.exitFullscreen()
        }else if(element.msrequestFullscreen){
            document.msExitFullscreen()
        // 注意谷歌苹果的是cancelFullScreen, cancel, Screen的s大写
        }else if(element.webkitRequestFullscreen){
            document.webkitCancelFullScreen()
        // 注意火狐的是cancelFull
        } else if(element.mozRequestFullScreen){
            document.mozCancelFullScreen()
        }

    }
}