jQuery(document).ready(function(){
  jQuery('.counter').each(function () {
    var $this = jQuery(this);
    var dur = $this.data('counter-animation');
    // var sep = $this.data('counter-seperator')
    // console.log(dur,sep,'ff')
    jQuery({ Counter: $this.data('counter-start') }).animate({ Counter: $this.data('counter-end') }, {
      duration: parseInt(dur),
      easing: 'swing',
      step: function (now) {
        $this.text(numberWithCommas(Math.ceil(now)));
      }
    });
    function numberWithCommas(x) {
      // console.log($this.data('counter-seperator', "fkfjkjfgk"));
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, $this.data('counter-seperator'));
  }
  });
})