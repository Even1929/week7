/**
 * Created by ���� on 2016/10/23.
 */
window.onload = function () {
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");

  function Drawsix(cxt,x,y){

      cxt.beginPath();
      cxt.moveTo(y,y);                 //������â�ǵ����
      cxt.lineTo(y+3*x,200+3*1.73*x);
      cxt.lineTo(y+6*x,y);
      cxt.closePath();                //���Ƶ�һ��������
      cxt.moveTo(y+3*x,y-1.73*x);
      cxt.lineTo(y,y+2*1.73*x);
      cxt.lineTo(y+6*x,y+2*1.73*x);
      cxt.closePath();     //���Ƶڶ���������
      cxt.strokeStyle="#003D79";
      cxt.fillStyle ="white";
      cxt.lineWidth=6;
      cxt.fill();
      cxt.stroke();
  }
    Drawsix(context,50,200);          //��â�ǵĻ���








};