function bodyStyle() {
    /*This is the style for whole page Inlined*/
    var styl = document.createElement("style");
    styl.innerHTML = "html, body { height:100%; overflow-x: hidden; } #center-text { display: flex; flex: 1; flex-direction:column; justify-content: center; align-items: center; height:100%; } /*#chat-circle { position: fixed; bottom: 50px; right: 50px; background: #82c638; width: 80px; height: 80px; border-radius: 50%; color: white; padding: 28px; cursor: pointer; box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }*/ #chat-circle { position: fixed; bottom: 20px; right: 25px; background: #82c638; z-index: 1; width: 60px; height: 60px; border-radius: 50%; color: white; padding: 19px; cursor: pointer; animation-name: example; animation-iteration-count: infinite; animation-duration: 2s; } @keyframes example{ 0%{box-shadow: 0px 5px 35px 9px rgba(0, 0, 0, 0.445); } 40%{box-shadow: 0px 5px 35px 9px #81c63800;} 60%{box-shadow: 0px 5px 35px 9px #81c63800;} 99%{box-shadow: 0px 5px 35px 9px rgba(0, 0, 0, 0.445); } } .btn#my-btn { background: white; padding-top: 13px; padding-bottom: 12px; border-radius: 45px; padding-right: 40px; padding-left: 40px; color: #82c638; } #chat-overlay { background: rgba(255,255,255,0.1); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; display: none; } .chat-box { display:none; background: #efefef; position:fixed; right:35px; bottom:55px; width:350px; max-width: 85vw; max-height:100vh; border-radius:5px; z-index: 999; /* box-shadow: 0px 5px 35px 9px #464a92; box-shadow: 0px 5px 35px 9px #ccc;*/ } .chat-box-toggle { float:right; margin-right:15px; cursor:pointer; } .chat-box-header { background: #82c638; height:60px; border-top-left-radius:5px; border-top-right-radius:5px; color:white; text-align:center; font-size:20px; padding-top:17px; } .chat-box-body { position: relative; height : 58vh; width:100%; border:1px solid #ccc; overflow: hidden; background: url('http://akthakur.me/folderaktu/bg.png') no-repeat center center; background-size: cover; } #chat-input { background: #f4f7f9; width:100%; position:relative; height:30px; padding-top:8px; padding-right: 50px; padding-bottom: 10px; padding-left: 10px; margin-left: 8px; border:none; resize:none; outline:none; border:1px solid #ccc; color:#888; border-radius:5px; overflow:hidden; } .chat-input > form { margin-bottom: 0; } #chat-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */ color: #ccc; } #chat-input::-moz-placeholder { /* Firefox 19+ */ color: #ccc; } #chat-input:-ms-input-placeholder { /* IE 10+ */ color: #ccc; } #chat-input:-moz-placeholder { /* Firefox 18- */ color: #ccc; } .chat-submit { bottom:14px; right:10px; background: transparent; box-shadow:none; border:none; border-radius:50%; color:#5A5EB9; width:35px; height:35px; padding-left:2px; padding-bottom:8px; } .chat-logs { padding:15px; height:-webkit-fill-available; overflow-y:scroll; } @media only screen and (max-width: 500px) { .chat-logs { height:-webkit-fill-available; } } .chat-msg.user > .msg-avatar img { width:45px; height:45px; border-radius:50%; float:left; width:15%; } .chat-msg.self > .msg-avatar img { width:45px; height:45px; border-radius:50%; float:right; width:15%; } .cm-msg-text { background:#fff099; padding:10px 15px 10px 15px; color:#666; max-width:75%; float:left; margin-left:10px; position:relative; margin-bottom:20px; border-radius:30px; } .chat-msg { clear:both; } .chat-msg.self > .cm-msg-text { float:right; margin-right:10px; background: #2496b4; color:white; } .cm-msg-button>ul>li { list-style:none; float:left; width:50%; } .cm-msg-button { clear: both; margin-bottom: 70px; }";
    document.head.appendChild(styl);

     /*This is the external styles for whole page*/
     var ln_1 = document.createElement('link');
     ln_1.setAttribute('rel', 'stylesheet');
     ln_1.setAttribute('as', 'style');
     ln_1.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css');
     ln_1.setAttribute('media', 'nope!');
     ln_1.setAttribute('onload', 'this.media="all"');
     document.head.appendChild(ln_1);
 
     var ln_2 = document.createElement('link');
     ln_2.setAttribute('rel', 'stylesheet');
     ln_2.setAttribute('as', 'style');
     ln_2.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.2/bootstrap-material-design.css');
     ln_2.setAttribute('media', 'nope!');
     ln_2.setAttribute('onload', 'this.media="all"');
     document.head.appendChild(ln_2);
 
     var ln_3 = document.createElement('link');
     ln_3.setAttribute('rel', 'stylesheet');
     ln_3.setAttribute('as', 'style');
     ln_3.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
     ln_3.setAttribute('media', 'nope!');
     ln_3.setAttribute('onload', 'this.media="all"');
     document.head.appendChild(ln_3);
}
bodyStyle();

function jScript(callback) {
        /*This is the scripts for whole page*/
        var sc_1 = document.createElement('script');
        sc_1.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js');
        sc_1.setAttribute("async","");
        sc_1.onload = callback;
        document.body.appendChild(sc_1);
        
        // var that = this;
        // setTimeout(() => {
        //     that.jqueryFunc();
        // }, 100);
}
function impScripts(){  
        var sc_2 = document.createElement('script');
        sc_2.setAttribute('src', 'https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js');
        sc_2.setAttribute("async","");
        document.body.appendChild(sc_2);

        var sc_3 = document.createElement('script');
        sc_3.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js');
        sc_3.setAttribute("async","");
        document.body.appendChild(sc_3);

        var sc_4 = document.createElement('script');
        sc_4.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/sockjs-client/1.1.5/sockjs.min.js');
        sc_4.setAttribute("async","");
        document.body.appendChild(sc_4);

        var sc_5 = document.createElement('script');
        sc_5.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js');
        sc_5.setAttribute("async","");
        document.body.appendChild(sc_5);

        sc_5.onload = jqueryFunc();
       
}


function jqueryFunc(){
    $(function() {
        //var INDEX = 0;
        var msg = $("#chat-input").val();
        
        $("#chat-submit").click(function(e) {
          e.preventDefault();
          var msg = $("#chat-input").val();
          if(msg.trim() == ''){
            return false;
          }
          //var response = showGreeting() ;
          generate_message(msg, 'self');
      
      //    setTimeout(function() {      
      //      generate_message(response, 'user');  
      //    }, 1000)
        })
        
        function generate_message(msg, type) {
          MASTERINDEX++;
          var str="";
          str += "<div id='cm-msg-"+MASTERINDEX+"' class=\"chat-msg "+type+"\">";
          str += "          <div class=\"cm-msg-text\">";
          str += msg;
          str += "          <\/div>";
          str += "        <\/div>";
          $(".chat-logs").append(str);
          $("#cm-msg-"+MASTERINDEX).hide().fadeIn(300);
          if(type == 'self'){
           $("#chat-input").val(''); 
          } 
          $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
        }  
        
        function generate_button_message(msg, buttons){    
          //INDEX++;
          var str="";
          str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
          str += "          <div class=\"cm-msg-text\">";
          str += msg;
          str += "          <\/div>";
          str += "        <\/div>";
          $(".chat-logs").append(str);
          $("#cm-msg-"+INDEX).hide().fadeIn(300);   
          $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
          $("#chat-input").attr("disabled", true);
        }
        function generate_message(msg, type) {
            var str="";
            str += "<div id='cm-msg-"+MASTERINDEX+"' class=\"chat-msg "+type+"\">";
            str += "          <div class=\"cm-msg-text\">";
            str += msg;
            str += "          <\/div>";
            str += "        <\/div>";
            $(".chat-logs").append(str);
            $("#cm-msg-"+MASTERINDEX).hide().fadeIn(300);
            if(type == 'self'){
             $("#chat-input").val(''); 
            } 
            $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);  
        }  
        
        $(document).delegate(".chat-btn", "click", function() {
          var value = $(this).attr("chat-value");
          var name = $(this).html();
          $("#chat-input").attr("disabled", false);
          generate_message(name, 'self');
        })
        
        $("#chat-circle").click(function() {
          $("#chat-circle").toggle('scale');
          $(".chat-box").toggle('scale');
          var welc = "Type help to get started.";
          setTimeout(function() {
              generate_message(welc, 'user')
          }, 1000);
        })
        
        $(".chat-box-toggle").click(function() {
          $("#chat-circle").toggle('scale');
          $(".chat-box").toggle('scale');
          javadisconnect();
        })
        
        $("#delete-chats").click(function(){
            $('.cm-msg-text').remove();
        })
       })
      
      
}

jScript(impScripts);

document.write( '<div id=\"body\">\n' );
document.write( '        <span id=\"chat-response\"></span>\n' );
document.write( '        <div id=\"chat-circle\" class=\"btn btn-raised\" onclick=\"connect();\">\n' );
document.write( '            <div id=\"chat-overlay\"></div>\n' );
document.write( '            <i class=\"material-icons\">question_answer</i>\n' );
document.write( '        </div>\n' );
document.write( '        <div class=\"chat-box\">\n' );
document.write( '            <div class=\"chat-box-header\">\n' );
document.write( '                Support\n' );
document.write( '                <span class=\"chat-box-toggle\">\n' );
document.write( '                    <i class=\"material-icons\">close</i>\n' );
document.write( '                </span>\n' );
document.write( '            </div>\n' );
document.write( '            <div class=\"chat-box-body\" style=\"\">\n' );
document.write( '                <div id=\"response\" class=\"chat-logs\">\n' );
document.write( '                </div>\n' );
document.write( '            </div>\n' );
document.write( '            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" style=\"padding-left: 2%;\">\n' );
document.write( '                <button type=\"button\" class=\"btn btn-primary btn-raised\" style=\"font-size: 9px;border-radius: 5%;\">Attach file </button>\n' );
document.write( '                <button type=\"button\" class=\"btn btn-success btn-raised\" style=\"font-size: 9px;border-radius: 5%;\" id=\"delete-chats\">Download Transcript</button>\n' );
document.write( '                <button type=\"button\" class=\"btn btn-warning btn-raised chat-box-toggle\" style=\"font-size: 9px;border-radius: 5%;\" onclick=\"javadisconnect();\">End Session</button>\n' );
document.write( '            </div>\n' );
document.write( '            <div class=\"chat-input\">\n' );
document.write( '                <form>\n' );
document.write( '                    <div class=\"row\">\n' );
document.write( '                        <div class=\"col-10\">\n' );
document.write( '                            <input type=\"text\" id=\"chat-input\" placeholder=\"Type a message...\" />\n' );
document.write( '                        </div>\n' );
document.write( '                        <div class=\"col-2\" style=\"padding-left: 0px;\">\n' );
document.write( '                            <button type=\"submit\" class=\"chat-submit\" id=\"chat-submit\" onclick=\"sendName()\">\n' );
document.write( '                                <i class=\"material-icons\">send</i>\n' );
document.write( '                            </button>\n' );
document.write( '                        </div>\n' );
document.write( '                    </div>\n' );
document.write( '                </form>\n' );
document.write( '            </div>\n' );
document.write( '        </div>\n' );
document.write( '    </div>' );


/*This section is used to connect the chatbot*/

var stompClient = null;
var connectionCheck = false;
var MASTERINDEX = 0;
var epoch = null;
function connect() {
    if(connectionCheck == false){
        var socket = new SockJS('http://54.152.186.92:85/mhbe/hello');
        stompClient = Stomp.over(socket);
        console.log("True Stomp");
        stompClient.connect({}, function(frame) {
            console.log("func in 1");
            console.log('Connected: ' + frame);
            stompClient.subscribe('http://54.152.186.92:85/mhbe/topic/greetings', function(greeting) {
                console.log(greeting.body);
                var temp = JSON.parse(greeting.body).content;
                if(temp == "Disconnected"){
                    disconnect();
                    generate_message(temp,'user');
                }
                else if (temp.charAt(0)== '{')
                {
                    var cleared = temp.replace(/&quot;/g ,'"');
                    var makeObj = JSON.parse(cleared).messages;
                    makeObj.forEach(function(entry) {
                        generate_message(entry.value,'user');
                    });
                }
                else {
                    generate_message(temp,'user');
                }
            });
        });
        epoch = getEpoch();
        connectionCheck = true;
    }
    else{
        console.log("Already Connected to server");
    }
}
function javadisconnect(){
    var name = "disconnect"
    stompClient.send("http://54.152.186.92:85/mhbe/app/hello", {}, JSON.stringify({
        'name' : "cancel"
    }));	
}

function disconnect() {
    stompClient.disconnect();	
    connectionCheck = false;
}
function getEpoch(){
    var milliSeconds = (new Date).getTime();
    return "user"+milliSeconds;
}
function sendName() {
    var name1 = document.getElementById('chat-input').value;
    var name  = epoch +':'+name1;
    console.log(name);
    stompClient.send("http://54.152.186.92:85/mhbe/app/hello", {}, JSON.stringify({
        'name' : name
    }));
}
