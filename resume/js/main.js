var portfolio1 = document.getElementById('portfolio1');
var portfolio2 = document.getElementById('portfolio2');
var portfolio3 = document.getElementById('portfolio3');
var small_2_picture = document.getElementById('small_2_picture');
var big_1_picture = document.getElementById('big_1_picture');
var portfolioBar = document.getElementById('portfolioBar');
var small_1 = document.getElementById('small_1');
var small_2 = document.getElementById('small_2');

portfolio1.onclick= function(){
    portfolioBar.className = 'bar state-1';
    small_2_picture.className = '';
    big_1_picture.className = '';
    small_1.className = '';
    small_2.className = '';
  }
  portfolio2.onclick= function(){
    portfolioBar.className = 'bar state-2';
    small_2_picture.className = 'small_2_picture_2';
    big_1_picture.className = '';
    small_1.className = '';
    small_2.className = '';
  }
  portfolio3.onclick= function(){
    portfolioBar.className = 'bar state-3';
    small_2_picture.className = '';
    big_1_picture.className = 'big_1_picture_1';
    small_1.className = 'small-1';
    small_2.className = 'small-2';
  }