//��â��
window.onload = function () {                               <!--��֤html���������ִ�к���,html�����ٶȱ�js��-->
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.fillStyle="white";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.moveTo(400,100);
    context.lineTo(600,420);
    context.lineTo(200,420);
    context.closePath();

    context.moveTo(400,530);
    context.lineTo(600,210);
    context.lineTo(200,210);
    context.closePath();
    context.fillStyle="yellow";
    context.strokeStyle="yellow";
    context.lineWidth=5;
    context.fill();
    context.stroke();

};/**
 * Created by pc on 2016/10/22.
 */
