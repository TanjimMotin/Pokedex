var oniSprite = document.querySelector('#onisprite');
var pokeName = document.querySelector('#pokename');
var pokeHP = document.querySelector('#pokehp');
var pokeAttack = document.querySelector('#pokeattack');
var pokeDefense = document.querySelector('#pokedefense');
var pokeAbilities = document.querySelector('#pokeabilities');

var oniPoke1 = document.getElementById('onipoke1');
var oniPoke2 = document.getElementById('onipoke2');
var oniPoke3 = document.getElementById('onipoke3');




oniPoke1.addEventListener('click', function() {threePokemon(152)})

oniPoke2.addEventListener('click', function() {threePokemon(172)})

oniPoke3.addEventListener('click', function() {threePokemon(182)})


function threePokemon(idnum) {
  $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
    success: function(response){
      oniSprite.style.backgroundImage = "url(" + response.sprites.front_default; + ")";
    
      pokeName.innerText = "Name: " + response.name ;
      pokeHP.innerText = "HP: " + response.stats[5].base_stat;
      pokeAttack.innerText = "Attack: " + response.stats[4].base_stat;
      pokeDefense.innerText = "Defense: " + response.stats[3].base_stat;

      var abil = "";

      for(let i = 0; i < response.abilities.length; i++) {
        if(i == response.abilities.length-1) {
          abil += (response.abilities[i].ability.name  + ".")
        }
        else {
          abil += (response.abilities[i].ability.name  + ", ");
        }
      }

      pokeAbilities.innerText = "Abilities: " + abil;
    }
  })
}
window.addEventListener('load', function() {
  (threePokemon(152));
});








/*var image = document.getElementById('image')
$.ajax({url:"https://fizal.me/pokeapi/api/152.json",
        success: function (response){
          console.log(response)
          image.style.backgroundImage = "url(" + response.sprites.front_default + ")"


                                    }
       })
       
$.ajax({url:"https://fizal.me/pokeapi/api/172.json",
        success: function (response2){
          console.log(response2)
          image2.style.backgroundImage = "url(" + response2.sprites.front_default + ")"

                                     }
       })

$.ajax({url:"https://fizal.me/pokeapi/api/182.json",
        success: function (response3){
          console.log(response3)
          image3.style.backgroundImage = "url(" + response3.sprites.front_default + ")"

                                     }
      })*/