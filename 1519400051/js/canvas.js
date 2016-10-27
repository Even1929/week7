window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 1000;
    canvas.height = 2800;
    var context = canvas.getContext("2d");
    //�滭һ����800����2400����ɫΪ#66ccff�ľ���
    context.beginPath();
    context.rect(100 , 0 , 800 , 2400);
    context.fillStyle= "#66ccff";
    context.fill();

    //�滭�ڰ����ľ���
    context.beginPath();
    for(var i = 0 ; i <= 40 ; i++)
    {
        drawWhiteRect(context , 100 + 10 * i , 100 + 10 * i ,800 - 20 * i , 800 - 20 * i );
        drawBlackRect(context , 105 + 10 * i , 105 + 10 * i ,790 - 20 * i , 790 - 20 * i );
    }

    //�ڰ����������ĵĺڵ�
    context.beginPath();
    context.rect(497.5 , 497.5 , 5 , 5 );
    context.fillStyle="black";
    context.lineWidth=5;
    context.fill();
    context.stroke();

    //��ɫ�����
    drawstar5(context , 300 , 150 , 500 , 1300 );
    //�滭��â��
    for( var j = 0 ; j < 80 ; j+=4 ){
        drawstar6white(context , 300 - j * 2 , 150 - j * 2 , 500 , 2000 );
        drawstar6black(context , 300 - j * 4 , 150 - j * 4 , 500 , 2000 );

    }
}

//����滭һ����ɫ���εĺ���
function drawWhiteRect(cxt , x,y,width,height)
{
    cxt.beginPath();
    cxt.rect(x,y,width,height);
    cxt.lineWidth=5;
    cxt.strokeStyle="#fff";

    cxt.stroke();
}
//����滭һ����ɫ���εĺ���
function drawBlackRect(cxt , x , y , width , height)
{
    cxt.beginPath();
    cxt.rect(x,y,width,height);
    cxt.lineWidth=5;
    cxt.strokeStyle="#000";

    cxt.stroke();
}
//����滭��ɫ����ǵĺ���
function drawstar5( cxt , R , r , x , y ){
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18 + 72 * i ) / 180 * Math.PI) * R + x , -Math.sin((18 + 72 * i) / 180 * Math.PI) * R + y);
        cxt.lineTo(Math.cos((54 + 72 * i ) / 180 * Math.PI) * r + x , -Math.sin((54 + 72 * i) / 180 * Math.PI) * r + y);
    }
    cxt.closePath();
    cxt.fillStyle = "#f00";
    cxt.lineWidth= 1 ;
    cxt.fill();
    cxt.stroke();
}
//����滭��ɫ��â�ǵĺ���
function drawstar6black( cxt , R , r , x , y ){
    cxt.beginPath();
    for (var i = 0; i < 6; i++) {
        cxt.lineTo(Math.cos( ( 0 + 60 * i ) / 180 * Math.PI) * r + x , -Math.sin( ( 0 + 60 * i) / 180 * Math.PI) * r + y);
        cxt.lineTo(Math.cos( ( 30 + 60 * i ) / 180 * Math.PI) * R + x , -Math.sin(( 30 + 60 * i) / 180 * Math.PI) * R + y);
    }
    cxt.closePath();
    cxt.fillStyle = "#000";
    cxt.fill();
    cxt.stroke();
}
//����滭��ɫ��â�ǵĺ���
function drawstar6white( cxt , R , r , x , y ){
    cxt.beginPath();
    for (var i = 0; i < 6; i++) {
        cxt.lineTo(Math.cos( ( 0 + 60 * i ) / 180 * Math.PI) * r + x , -Math.sin( ( 0 + 60 * i) / 180 * Math.PI) * r + y);
        cxt.lineTo(Math.cos( ( 30 + 60 * i ) / 180 * Math.PI) * R + x , -Math.sin(( 30 + 60 * i) / 180 * Math.PI) * R + y);
    }
    cxt.closePath();
    cxt.fillStyle = "#fff";
    cxt.fill();
    cxt.stroke();
}