/**
 * Created by Administrator on 2016/10/25 0025.
 */
window.onload=function() {
    var canvas=document.getElementById("canvas");
    canvas.width=800;
    canvas.height=800;
    var context=canvas.getContext("2d");//׼������

    context.beginPath();
    context.rect(0,0,800,600);//����һ�����Ϊ��0��0������Ϊ800����Ϊ600�ľ���
    context.fillStyle="black";//���������ɫΪ��ɫ

    context.fill();//ȷ�����



    context.beginPath();
    for(var  i=0;i<20;i++){//ѭ����䣬��ʾѭ��20��
        pic(context,200+10*i,100+10*i,400-20*i,400-20*i);//���ú���pic

    }


    context.stroke();}

    function pic(cxt,x,y,w,h){//����һ��������Ϊpict�ĺ�����������Ϊcxt,x,y,w,h
        cxt.beginPath();
        cxt.rect(x,y,w,h);//����һ�����Ϊ��x,y������Ϊw����Ϊh�ľ���

        cxt.lineWidth=5;
        cxt.strokeStyle="white";//�����߿��������ɫΪ��

        cxt.stroke();
    }


