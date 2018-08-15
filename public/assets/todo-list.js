$(document).ready(function(){

  $('form').on('submit', function(){
    
      var item = $('form input');
      // todo is equal to the user input on the item form
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      
      return false;
  
  });

  // delete
  $('li').on('click', function(){
    // replace empty spaces with - to match the query string
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        //item replaced empty spaces sent to the url
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
