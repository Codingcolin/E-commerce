
toys = {
  squeaky: "images/squeaky.jpg",
  fluffy: "images/fluffy.jpg",
  happy: "images/happy.jpg",
  angry: "images/angry.jpg",
  small:"images/small.jpg",
  ball: "images/ball.jpg",
},

food = {
  beef:"images/beef.jpg",
  pork: "images/pork.jpg",
  mix:"images/mix.jpg",
  fish:"images/fish.jpg",
  organic:"images/organic.jpg",
  chicken:"images/chicken.jpg",
},

clothes = {
  jackets:"images/hats.jpeg",
  shirts:"images/shirts.jpg",
  pants:"images/pants.jpg",
  shoes: "images/shoes.jpg",
  costume:"images/costume.png",
  cute:"images/cute.jpg",
  }
 
function Product(image) {
  this.image = image;
}

var productArray = []

var product1 = new Product(toys.squeaky)
var product2 = new Product(toys.fluffy)
var product3 = new Product(toys.happy)
var product4 = new Product(toys.angry)
var product5 = new Product(toys.small)
var product6 = new Product(toys.ball)


productArray.push(product1)
productArray.push(product2)
productArray.push(product3)
productArray.push(product4)
productArray.push(product5)
productArray.push(product6)

for (i = 0; i < productArray.length; i++) {
  var pName = document.createTextNode(productArray[i].name)
  var pStock = document.createTextNode("Product" + productArray[i].stock)
  var pButton = document.createTextNode("Buy Now!")
  var pImage = productArray[i].image

  var newCol = document.createElement("DIV")
  var newDiv = document.createElement("DIV")
  var buyNow = document.createElement("BUTTON")
  var image = document.createElement("IMG")

  buyNow.appendChild(pButton)
  buyNow.className = "btn btn-primary btn-lg"
  image.src = pImage
  image.className = "img-responsive"

  newCol.className = "col-sm-4"
  newDiv.className = "product" + i + " thumbnail"
  newDiv.appendChild(image)
  newDiv.appendChild(buyNow)
  newCol.appendChild(newDiv)

  document.getElementById("products").appendChild(newCol)
}

