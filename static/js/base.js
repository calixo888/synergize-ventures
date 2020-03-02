$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    var $separatorRight = $(".separator-right")
    $separatorRight.toggleClass('separator-right-dark', $(this).scrollTop() > $nav.height())

    var $promptItem = $('.prompt-item');
    $promptItem.toggleClass('prompt-item-dark', $(this).scrollTop() > $nav.height())

    var $shoppingList = $('.shopping-list')
    $shoppingList.toggleClass('shopping-list-dark', $(this).scrollTop() > $nav.height())
  });
});
