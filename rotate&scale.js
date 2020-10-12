var a = 0;
      function rotate1(x){
        var e = document.getElementById("preview01");
        a = a + x;
        e.style.transform = "rotate(" + a + "deg) scale(" + b + ")";
      }      
      var b = 1;
      function scale1(y){
        var e = document.getElementById("preview01");
        b = b + y;
        e.style.transform = "scale(" + b + ") rotate(" + a + "deg)";
      }      var c = 0;
      function rotate2(x){
        var h = document.getElementById("preview02");
        c = c + x;
        h.style.transform = "rotate(" + c + "deg) scale(" + d + ")";
      }      
      var d = 1;
      function scale2(y){
        var e = document.getElementById("preview02");
        d = d + y;
        e.style.transform = "scale(" + d + ") rotate(" + c + "deg)";
      }      var f = 0;
      function rotate3(x){
        var  e = document.getElementById("pdfViewer01");
        f = f + x;
        e.style.transform = "rotate(" + f + "deg) scale(" + g + ")";
      }      
      var g = 1;
      function scale3(y){
        var e = document.getElementById("pdfViewer01");
        g = g + y;
        e.style.transform = "scale(" + g + ") rotate(" + f + "deg)";
      }      var h = 0;
      function rotate4(x){
        var e = document.getElementById("pdfViewer02");
        h = h + x;
        e.style.transform = "rotate(" + h + "deg) scale(" + i + ")";
      }      
      var i = 1;
      function scale4(y){
        var e = document.getElementById("pdfViewer02");
        i = i + y;
        e.style.transform = "scale(" + i + ") rotate(" + h + "deg)";
      }