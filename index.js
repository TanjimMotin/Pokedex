var array = [152, 172, 182 ]
var counter = 0;
var left = document.getElementById('left')
var right = document.getElementById('right')
var mainImage = document.querySelector(".main-image")



class Pokemon{
	constructor(url, name){
		this.url = url;
		this.name = name;
	}
}

class Trainer {

	all(){

	}
}


	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[0] + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			builtClass(response)

			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
			document.querySelector(".attack").innerHTML = response.stats[4].base_stat
			document.querySelector(".defence").innerHTML =  response.stats[3].base_stat
		}
	})

right.addEventListener('click', function(){	

	counter += 1;
	if(counter > 2){
		counter = 0;
	}
	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter] + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			builtClass(response)

			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
			document.querySelector(".attack").innerHTML = response.stats[4].base_stat
			document.querySelector(".defence").innerHTML = response.stats[3].base_stat
		}
	})
})

left.addEventListener('click', function(){	

	counter -= 1;
	if(counter < 0){
		counter = array.length-1;
	}
	$.ajax({url: " https://fizal.me/pokeapi/api/" + array[counter] + ".json",
		data: {},
		dataType: "json",
		success:function(response){
			builtClass(response)

			document.querySelector(".hp").innerHTML = response.stats[5].base_stat
			document.querySelector(".attack").innerHTML = response.stats[4].base_stat
			document.querySelector(".defence").innerHTML = response.stats[3].base_stat
		}
	})
})



function builtClass(x){
	a = new Pokemon(x.sprites.front_default, x.name)
	format(a)
}


function format(y){
			mainImage.style.backgroundImage = "url(" + y.url+ ")"
			mainImage.style.backgroundSize = "100% 100%"
			mainImage.style.border = '2px solid';
			mainImage.style.width = '300px'
			mainImage.style.height = '300px'
			mainImage.style.margin = '20px auto'
			document.querySelector(".name").innerHTML = y.name;

}












































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