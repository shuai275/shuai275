      $(document).ready(function() {
            // 检测 User-Agent 字符串
            var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            var typeValue = $('body').attr('data-type');
            
            // 如果是手机浏览器，则跳转到 index.html
            if (isMobile && typeValue == 'pc') {
                
             
                    window.location.href = './index_m.html';
                
                
            }
          if (!isMobile && typeValue == 'phone') {
              
           
                  window.location.href = './index.html';
              
              
          }
        });