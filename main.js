
function manageAgency(name) {
  return {
    name: name,
    list: [],
    makeAppart: makeAppart,
    displayAppart: displayAppart,
    deleAppart: deleAppart,
    updateAppart: updateAppart,
    // sortbyExpensive:sortbyExpensive,
    // sortbyCheap:sortbyCheap
    sortbyPrice: sortbyPrice


  }

}
function refrences() {
  var count = 0;
  return function () {
    return count++;
  };
}
var ref = refrences();


function makeAppart(name, location, description, price, images) {
  var state = {
    ref: ref(),
    name,
    location,
    description,
    price: price,
    images,
  }
  this.list.push(state)
  return state
}

var agency = manageAgency("Harmony Heaven")
agency.makeAppart("Palm Beach Towers ", "The Palm Jumeirah", "Panoramic views over the entire Resort greet you from the moment you step through the sliding-door entrance to our Penthouse Suite, an idyllic, top-floor retreat offering 5,000 square feet (465 square metres) of VIP living.", 650000, ["https://www.callawayhenderson.com/localimagereader.ashx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1259i215%2F49q6ezfemwyt4ejpcsv6aezc84i215&imagecache=true", "https://www.luxuryproperty.com/files/large/7e0f914a66382a0a5af76cc9aee67c9e.jpg", "https://thepenthouse.co/wp-content/uploads/2022/05/dubai-1.jpg"])
agency.makeAppart("VOLTA DOWNTOWN ", "Down Town Dubaï", "Volta is an architectural marvel that puts your fitness and wellbeing first located in the heart of the emirate — on Sheikh Zayed Road, in Downtown Dubai. The one-of-a-kind residence is designed for those who embrace the pace of life but also know when to pause and energise themselves to stay ahead in the long run. You could call Volta a home, or an epitome of good health. Among units on offer are 1-2 bedroom luxury apartments", 1350000, ["https://www.campaign-dubai.com/new/assets/images/dd/volta.jpg", "https://luxhabitat.ae/resizedimages/560w/10222/source/37c770d2e7bb2ce2f1af5fa1d17a9e919d3163a2133a5c2504cf9421b129980a.jpg", "https://luxhabitat.ae/resizedimages/1920w/10515/source/b568d7ee23509b05824e90ec879228ae4754d3c3d3c709a9eaafdd5a0a2a7889.jpg", "https://luxhabitat.ae/resizedimages/1920w/10346/source/0e379b64a300bc29c83906ce86d5bf630a998418c0df57a306e94bec04e53dcd.jpg"])
agency.makeAppart("Bugatti By Binghatti", "Business Bay-Dubaï", 'Bugatti Residences will offer just 182 apartments. Ranging from 2 to 4 bedrooms, almost all apartments will feature a private swimming pool on the terrace. The size of the apartments will be spectacular, with many exceeding 1000m2', 2450000, ["https://cdn.opr.ae/icons/331c6883dd6010864b7ead130be77cd5.jpg", "https://static.zawya.com/view/acePublic/alias/contentid/MjdmZGRlZGMtMjIwNC00/0/image3-towerview-jpg.webp?f=3%3A2&q=0.75&w=3840", "https://static.zawya.com/view/acePublic/alias/contentid/MjdmZGRlZGMtMjIwNC00/0/image3-towerview-jpg.webp?f=3%3A2&q=0.75&w=3840"])




function display(appart) {
  var ref = appart.ref;
  $("#agency").append(`
    <div class = appart id = appart${ref}>
      <button class = name id = name${ref}>${appart.name}</button>
      <p class = location id = location${ref}>  ${appart.location}</p>
      <p class = description id = description${ref}>${appart.description}</p>
      <p class = price id = price${ref} >Cost: <br> ${appart.price}$</p>
      <img class = image id = ${ref} src=${appart.images[0]} alt = ${appart.images[1]} />
    </div>
    `);
}

function displayAppart() {
  $("#agency").empty();
  for (var i = 0; i < this.list.length; i++) {
    display(this.list[i]);
  }
}

agency.displayAppart()

function deleAppart(ref) {
  this.list = this.list.filter(function (appart) {
    return appart.ref !== ref;
  });
  $(`#appart${ref}`).remove();
}

agency.deleAppart()



function sortbyPrice() {
  agency.list.sort(function (a, b) {
    console.log("hello")
    return b.price - a.price

  });
  agency.displayAppart()
}

$("#price").on("click", sortbyPrice);



function updateAppart(ref, p, newVal) {
  this.list.forEach(function (appart) {
    if (appart.ref === ref) {
      appart[p] = newVal
    }
  })
  this.displayAppart
}


$("#btns").on("click", function () {
  var value = $("#search").val()
  var filtred = agency.list.filter(function (appart) {
    return appart.name.toLowerCase().includes(value.toLowerCase());

  })
  $("#agency").empty()
  filtred.forEach(function (appart) {
    display(appart)
  })
})


// var pics = document.querySelectorAll(".image");
// 	for (var i = 0; i < image.length; i++) {
// 	  console.log('image: ', image[i]);
// 	}

//   $(".name").click(pics)

function changeImage() {
  // agency.list.forEach(function (appart) {
  //   console.log(agency)

  // })
  // sorry it didn't work the normal way 
  $('img').attr('src',agency.list[0].images[2])
}




$(".name").on("click", changeImage)

// $(".image").click(function () {
//   var ref = this.ref;
//   console.log("hello")
//   var src = this.src;
//   var alt = this.alt;
//   $(`#${ref}`).attr("src", alt);
//   $(`#${ref}`).attr("alt", src);
// });


// function sortbyExpensive() {
//   agency.list.sort(function(a,b){
//     return b.price-a.price
//   });
//   agency.displayAppart()
// }

// function sortbyCheap() {
//   agency.list.sort(function(a,b){
//     return a.price-b.price
//   });
//   agency.displayAppart()
// }

// $("#expensive").on("change", sortbyExpensive);
// $("#cheap").on("change",sortbyCheap)








































































































