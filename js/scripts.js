$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    const item1Input = $("#item1").val();
    const item2Input = $("#item2").val();
    const item3Input = $("#item3").val();
    const item4Input = $("#item4").val();
    let list = [item1Input, item2Input, item3Input, item4Input];
    let sortedList = list.sort();
    let capitalizedList = [];
    sortedList.forEach(function (item) {
      capitalizedList.push(item.toUpperCase());
    });
    capitalizedList.forEach(function(item) {
      $("#result").append("<li>"+item+"</li>");
    });
  });
});