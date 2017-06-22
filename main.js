// function(){twoPerSecond(10,2);}

//document.getElementById("upgrade").addEventListener("click", function(){alert("sigh");});

$(document).ready(function(){

  window.value = 0;

  document.getElementById('plusOne').addEventListener("click", function(){ adjustClick(1,1); });
  document.getElementById('upgrade').addEventListener("click", addPerSecond);

  setInterval(function(){ $("#data").text(window.value.toString()); }, 1000);

});

/* handles user point data after clicking a button */
function adjustClick(given_value, flag)
{
  //window.value = parseInt($("#data").text(), 10); // get <p> content as number
  window.value += given_value;

  if (flag == 1)
    $("#data").text(window.value.toString()); // replace old <p> value

  return window.value;
}

/* continuous upgrade available */
function addPerSecond()
{
    //var price=10;
    //var increase=2;

    // price = cost_message[6:]
    // increase = #upgrade [1:-7]

    let price = $("#cost_message").text().slice(6); // get current price
    price = parseInt(price, 10);

    var increase = $("#upgrade").val().slice(1,-7);
    increase = parseInt(increase, 10);


    //window.value = parseInt($("#data").text(), 10); // from str to int


    /* check if user can afford here */
    if (window.value < price)
      return; // could not afford

    window.value -= price;

    let pps = $("#pps").text().slice(15);
    pps = parseInt(pps, 10);
    pps+=increase;
    $("#pps").text("Points/Second: " + pps.toString());

    // factor by which the new price increases
    price *= 2;
    $("#cost_message").text( "Cost: " + price.toString() );

    // the next upgrade value
    //increase += 1;
    $("#upgrade").val( "+" + increase.toString() + "/second" );
    // change current user running point value after purchase
    $("#data").text(window.value.toString());


    var i = setInterval(function(){

      adjustClick(increase,0);
      //$("#data").text(window.new_value.toString());

    }, 1000);
}
