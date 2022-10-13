 var rqg = new Array()
 rqg[0] = '<blockquote><h2>Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!<br /><footer> Don Quixote Doflamingo (One Piece)</footer></h2></blockquote>'

  rqg[1] = '<blockquote><h2>Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, it’s enough to start war. War will never cease to exist… reasons can be thought up after the fact. Human nature pursues strife<br /><footer> Paine (Naruto Shippuden)</footer></h2></blockquote>'

  rqg[2] = '<blockquote><h2>If you don’t take risks, you can’t create a future!<br /><footer> Monkey D. Luffy (One Piece)</footer></h2></blockquote>'

  rqg[3] = '<blockquote><h2>Destiny. Fate. Dreams. These unstoppable ideas are held deep in the heart of man. As long as there are people who seek freedom in this life, these things shall not vanish from the Earth.<br /><footer> Gold D. Rodger (One Piece)</footer></h2></blockquote>'

  rqg[4] = '<blockquote><h2>I could say I\'m not sad, but I\'d be lying. The problem is the world won\'t let me stay a kid forever, so I can\'t lie around crying about it either.<br /><footer> Shikamaru Nara (Naruto Shippuden)</footer></h2></blockquote>'

  rqg[5] = '<blockquote><h2>People’s lives don’t end when they die, it ends when they lose faith.<br /><footer> Itachi Uchiha (Naruto Shippuden)</footer></h2></blockquote>'

  rqg[6] = '<blockquote><h2>If you don’t like your destiny, don’t accept it.”<br /><footer> Naruto Uzumaki (Naruto Shippuden)</footer></h2></blockquote>'
 
  
  var msg;
  function tweet() {
  tweet($(msg).text()); 
  }

  function tweet(message) {
  window.open('https://twitter.com/intent/tweet?hashtags=FreeCodeCamp&text= '   + encodeURIComponent(message));
  }

  $('#tweet').on('click', tweet);
  $(document).ready(function() {
  $("#quoteIt").on("click", function()   {
    var randomquote=Math.floor(Math.random()*(rqg.length));
    msg=rqg[randomquote];
    $(".message").html(msg);
    });
    });
