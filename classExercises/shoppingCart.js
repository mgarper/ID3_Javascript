/**
 * Gutufasio está programando un carrito de la compra y está pensando en como modelar los objetos.
 * Imagina que en el carrito de la compra hay los siguientes elementos:
 *  7 botellas de agua - 700€
 *  2 bolsas de palomitas: 255.5€
 *  1 kg de azúcar: 1000€
 *  728 panes de hamburguesa: 928€
 *  28 kg de tofu ahumado: 2223€
 * Escribe un array para representar esa información.
 */
let shoppingCart = [
  { product: "botella de agua", units: 7, price: 700 },
  { product: "bolsa de palomitas", units: 2, price: 255.5 },
  { product: "azúcar", units: 1, price: 1000 },
  { product: "pan de hamburguesa", units: 728, price: 928 },
  { product: "tofu ahumado", units: 28, price: 2223 },
];
console.log(shoppingCart);

/**
 * Al carrito vamos a aplicarle los impuestos.
 * Los impuestos dependerán del país. Gutufasio no sabe mucho de esto y lo único que sabe es que en España
 * los impuestos son el 21%, salvo en Ceuta, Melilla y Canarias, que no hay impuestos.
 *
 * Además, Gutufasio es UX, así que ha decidido poner en la interfaz los impuestos de cada elemento del array
 * por lo que necesita que en el array, cada elemento tenga, además de su precio, el impuesto.
 *
 * Crea una función que se llame calculateTaxes, que acepte dos parámetros de entrada:
 * - country
 * - state
 * La función debe devolver un nuevo array incluyendo el precio con impuestos y el precio total para cada elemento.
 */
function calculateTaxes(country, state) {
  let tax = 0;
  if (country === "España") {
    if (state !== "Ceuta" && state !== "Melilla" && state !== "Canarias") {
      tax = 0.21;
    }
  }
  shoppingCart.forEach((element) => {
    element.tax = tax;
    element.priceAfterTaxes = element.price * (1 + tax);
  });
  return shoppingCart;
}
calculateTaxes("España", "Baleares");
console.log(shoppingCart);

/**
 * Gutufasio quiere añadir cupones, porque total, como cobra la botella de agua a 100€, pues se lo puede permitir.
 *
 * Los cupones tienen 3 propiedades:
 * - El código del cupón
 * - El porcentage de descuento que tiene
 * - El mínimo de dinero que tiene que costar el carrito de la compra sin impuestos, para que el cupón aplique
 *
 *
 * Los cupones válidos serán:
 *  GUTUFACIO10, ROBUSTIO20, LOSORNITORRINCOSMOLANUNHUEVO50
 *  Los porcentajes de descuento son 10, 20 y 50 respectivamente, y las cantidades mínimas para que funcionen son
 *  1000€, 20€ y 5000€
 *
 * Como ya hemos dicho, Gutufacio le gusta poner toda la información en la interfaz, y quiere poner el precio original de cada
 * elemento y el precio después de aplicar el cupón.
 *
 * La función para comprobar y aplicar un cupón de descuento se llamará applyCoupon y tendrá dos parámetros:
 *  - El cupón de descuento
 *  - El array con el carrito de la compra
 * La función debe devolver el nuevo carrito con el cupón aplicado si es válido
 *
 * Nota, el descuento se aplica sobre el precio sin impuestos. Los impuestos se calculan sobre el precio base.
 */
const vouchers = [
  { code: "GUTUFACIO10", percentage: 0.1, minimum: 1000 },
  { code: "ROBUSTIO20", percentage: 0.2, minimum: 20 },
  { code: "LOSORNITORRINCOSMOLANUNHUEVO50", percentage: 0.5, minimum: 5000 },
];

function applyCoupon(voucher, shoppingCart) {
  let cartPrice = calculateTotalPrice(shoppingCart);
  let selectedVoucher;
  vouchers.forEach((element) => {
    if (element.code === voucher) {
      selectedVoucher = element;
      return;
    }
  });
  if (cartPrice >= selectedVoucher.minimum) {
    shoppingCart.forEach((element) => {
      element.priceAfterDiscount =
        element.price * (1 - selectedVoucher.percentage);
      element.priceAfterTaxes = element.priceAfterDiscount * (1 + element.tax);
    });
    return shoppingCart;
  }
  return;
}

function calculateTotalPrice(shoppingCart) {
  let res = 0;
  shoppingCart.forEach((element) => {
    res += element.price;
  });
  return res;
}

console.log(applyCoupon("GUTUFACIO10", shoppingCart));

/**
 * Al carrito de la compra de Gutufasio le vamos a aplicar ahora los gastos de envío.
 * Los gastos de envío dependerán del país y de la región.
 *  Si el país es españa:
 *      Si la región es Ceuta, Melilla o Canarias, los gastos de envío serán 2€
 *      Si la región es otra serán de 1.5€
 *  Si el país es Francia los gastos de envío serán 500€, porque Gutufasio odia a los franceses y no quiere enviarles nada
 *  salvo a la región de Alsacia, que está muy bonita en navidad, así que los gastos de envío serán 5€ en ese caso.
 *  Si el país es Andorra, los gastos de envío serán 100€, ya que no pagan impuestos pues que paguen por el envío.
 *  En cualquier otro caso los gastos de envío serán 30€
 */
function shippingCosts(country, region) {
  if (country === "España") {
    return region === "Ceuta" || region === "Melilla" || region === "Canarias"
      ? 2
      : 1.5;
  } else if (country === "Francia") {
    return region === "Alsacia" ? 5 : 500;
  } else if (country === "Andorra") {
    return 100;
  } else {
    return 30;
  }
}

/**
 * Bueno, Gutufasio se lo ha pensado mejor y si el carrito de la compra supera los 100€, los gastos de envío serán gratis
 * salvo si el país es Francia, a los Franceses sigue cobrándoselos
 */
function shippingCosts2(country, region) {
  if (country === "Francia") {
    return region === "Alsacia" ? 5 : 500;
  } else {
    if (calculateTotalPrice(shoppingCart) > 100) {
      return 0;
    } else {
      if (country === "España") {
        return region === "Ceuta" ||
          region === "Melilla" ||
          region === "Canarias"
          ? 2
          : 1.5;
      } else if (country === "Andorra") {
        return 100;
      } else {
        return 30;
      }
    }
  }
}
