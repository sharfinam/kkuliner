$(function () {
  var $threadForm = $("#js-create-thread");
  var $threadContainer = $("#js-thread-container");

  function generateThreadTemplate(author, content) {
    var template = '<div class="thread js-thread">';
    template += '<div class="thread-author">' + author + '</div>';
    template += '<div class="thread-content">' + content + '</div>';

    // reply
    template += '<div id="js-thread-reply-container" class="thread-reply-container">';
    template += '</div>';

    // form
    template += '<form action="#" class="thread-reply-form js-reply-form">';
    template += '<label for="js-reply-name">Name</label>';
    template += '<input type="text" class="input" id="js-reply-name" placeholder="Insert your name">';
    template += '<label for="js-reply-content">Content</label>';
    template += '<textarea class="input" id="js-reply-content" rows="3" placeholder="Share your thought"></textarea>';
    template += '<br>';
    template += '<div class="form-error js-form-error">Name or Content must be filled!</div>';
    template += '<button class="button js-reply-btn" type="submit">Reply</button>';
    template += '</form>';

    template += '</div>';

    return template;
  }

  function generateReplyTemplate(author, content) {
    var template = '';
    template += '<div class="thread-reply">';
    template += '<div class="thread-reply-author">'+ author +'</div>';
    template += '<div class="thread-reply-content">'+ content + '</div>';

    return template;
  }

  $threadForm.on('submit', function (e) {
    var name = $(this).find('#js-thread-name');
    var content = $(this).find('#js-thread-content');
    var error = $(this).find('.js-form-error')
    if (name.val().length == 0 || content.val().length == 0) {
      error.addClass('is-show');
      return false;
    }

    var template = generateThreadTemplate(name.val(), content.val());
    console.log('template', template);

    $threadContainer.append(template);

    name.val('');
    content.val('');
    error.removeClass('is-show');

    e.preventDefault();
  });

  $threadContainer.on('submit', '.js-reply-form', function (e){
    var name = $(this).find('#js-reply-name');
    var content = $(this).find('#js-reply-content');
    var error = $(this).find('.js-form-error');
    var $replyContainer = $(this).siblings('#js-thread-reply-container');

    if (name.val().length == 0 || content.val().length == 0) {
      error.addClass('is-show');
      return false;
    }

    var template = generateReplyTemplate(name.val(), content.val());
    $replyContainer.append(template);

    name.val('');
    content.val('');
    error.removeClass('is-show');

    e.preventDefault();
  });
});
