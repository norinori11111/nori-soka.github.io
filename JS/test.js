
var count = 0;
while (count < 3){
//    alert("while文のテストです。 今"　+ count + "回目のループです。");
    count = count +1;
}

//繰返し処理

for( var i =0; i < 3; i++){
//    alert("for文のテストです。 今"　+ i + "回目のループです。");
}

var player_hand = ["グー","チョキ","パー"];
for (var i=0; i<player_hand.length; i++){
  //  alert(player_hand[i]);
}

var judge =1;
if (judge >0){
  //  alert("judgeは正の数です。");
}else if (judge < 0){
    //    alert("judgeは負の整数です。");
}else if (judge == 0){
      //  alert("judgeは0です。");
}else{
    //    alert("judgeは数字ではありません。");
    }


function hello(language){
    var message ="";
    if(language == 1){
        message ="こんにちわ"
    } else if(message ==2){
        message = "hello"
    } else if(message ==3){
        message = "你好"
    } else if(message ==4){
        message = "안녕하세요"
    } 
    
}