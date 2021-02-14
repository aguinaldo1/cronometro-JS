"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo
var cron;

function start(){
  cron = setInterval(() => { timer(); }, tempo);
}

function pause(){
  clearInterval(cron);
}

function stop(){
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById('counter').innerText = '00:00:00';
}

function timer(){
  ss++;//incrementa + 1 na variável ss
  
  if(ss == 59){//verifica se deu 59 segundos
    ss = 0;//volta os segundos para 00
    mm++;//adiciona + 1 na variável mm

    if(mm == 59){//verifica se deu 59 minutos
      mm = 0;//volta os minutos para 0
      hh++;//adiciona +1 na variável hora
    }
  }

  var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;

    //retorna o valor tratado
    return format;
}