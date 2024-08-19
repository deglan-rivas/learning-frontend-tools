import { Product } from "@prisma/client";

export const products: Omit<Product, "id">[] = [
  {
    name: "Café Caramel con Chocolate",
    price: 59.9,
    image: "cafe_01",
    categoryId: "cafe"
  },
  {
    name: "Café Frio con Chocolate Grande",
    price: 49.9,
    image: "cafe_02",
    categoryId: "cafe"
  },
  {
    name: "Latte Frio con Chocolate Grande",
    price: 54.9,
    image: "cafe_03",
    categoryId: "cafe"
  },
  {
    name: "Latte Frio con Chocolate Grande",
    price: 54.9,
    image: "cafe_04",
    categoryId: "cafe"
  },
  {
    name: "Malteada Fria con Chocolate Grande",
    price: 54.9,
    image: "cafe_05",
    categoryId: "cafe"
  },
  {
    name: "Café Mocha Caliente Chico",
    price: 39.9,
    image: "cafe_06",
    categoryId: "cafe"
  },
  {
    name: "Café Mocha Caliente Grande con Chocolate",
    price: 59.9,
    image: "cafe_07",
    categoryId: "cafe"
  },
  {
    name: "Café Caliente Capuchino Grande",
    price: 59.9,
    image: "cafe_08",
    categoryId: "cafe"
  },
  {
    name: "Café Mocha Caliente Mediano",
    price: 49.9,
    image: "cafe_09",
    categoryId: "cafe"
  },
  {
    name: "Café Mocha Frio con Caramelo Mediano",
    price: 49.9,
    image: "cafe_10",
    categoryId: "cafe"
  },
  {
    name: "Café Mocha Frio con Chocolate Mediano",
    price: 49.9,
    image: "cafe_11",
    categoryId: "cafe"
  },
  {
    name: "Café Espresso",
    price: 29.9,
    image: "cafe_12",
    categoryId: "cafe"
  },
  {
    name: "Café Capuchino Grande con Caramelo",
    price: 59.9,
    image: "cafe_13",
    categoryId: "cafe"
  },
  {
    name: "Café Caramelo Grande",
    price: 59.9,
    image: "cafe_14",
    categoryId: "cafe"
  },
  {
    name: "Paquete de 3 donas de Chocolate",
    price: 39.9,
    image: "donas_01",
    categoryId: "dona"
  },
  {
    name: "Paquete de 3 donas Glaseadas",
    price: 39.9,
    image: "donas_02",
    categoryId: "dona"
  },
  {
    name: "Dona de Fresa ",
    price: 19.9,
    image: "donas_03",
    categoryId: "dona"
  },
  {
    name: "Dona con Galleta de Chocolate ",
    price: 19.9,
    image: "donas_04",
    categoryId: "dona"
  },
  {
    name: "Dona glass con Chispas Sabor Fresa ",
    price: 19.9,
    image: "donas_05",
    categoryId: "dona"
  },
  {
    name: "Dona glass con Chocolate ",
    price: 19.9,
    image: "donas_06",
    categoryId: "dona"
  },
  {
    name: "Dona de Chocolate con MÁS Chocolate ",
    price: 19.9,
    image: "donas_07",
    categoryId: "dona"
  },
  {
    name: "Paquete de 3 donas de Chocolate ",
    price: 39.9,
    image: "donas_08",
    categoryId: "dona"
  },
  {
    name: "Paquete de 3 donas con Vainilla y Chocolate ",
    price: 39.9,
    image: "donas_09",
    categoryId: "dona"
  },
  {
    name: "Paquete de 6 Donas",
    price: 69.9,
    image: "donas_10",
    categoryId: "dona"
  },
  {
    name: "Paquete de 3 Variadas",
    price: 39.9,
    image: "donas_11",
    categoryId: "dona"
  },
  {
    name: "Dona Natural con Chocolate",
    price: 19.9,
    image: "donas_12",
    categoryId: "dona"
  },
  {
    name: "Paquete de 3 Donas de Chocolate con Chispas",
    price: 39.9,
    image: "donas_13",
    categoryId: "dona"
  },
  {
    name: "Dona Chocolate y Coco",
    price: 19.9,
    image: "donas_14",
    categoryId: "dona"
  },
  {
    name: "Paquete Galletas de Chocolate",
    price: 29.9,
    image: "galletas_01",
    categoryId: "galletas"
  },
  {
    name: "Paquete Galletas de Chocolate y Avena",
    price: 39.9,
    image: "galletas_02",
    categoryId: "galletas"
  },
  {
    name: "Paquete de Muffins de Vainilla",
    price: 39.9,
    image: "galletas_03",
    categoryId: "galletas"
  },
  {
    name: "Paquete de 4 Galletas de Avena",
    price: 24.9,
    image: "galletas_04",
    categoryId: "galletas"
  },
  {
    name: "Galletas de Mantequilla Variadas",
    price: 39.9,
    image: "galletas_05",
    categoryId: "galletas"
  },
  {
    name: "Galletas de sabores frutales",
    price: 39.9,
    image: "galletas_06",
    categoryId: "galletas"
  },
  {
    name: "Hamburguesa Sencilla",
    price: 59.9,
    image: "hamburguesas_01",
    categoryId: "hamburguesa"
  },
  {
    name: "Hamburguesa de Pollo",
    price: 59.9,
    image: "hamburguesas_02",
    categoryId: "hamburguesa"
  },
  {
    name: "Hamburguesa de Pollo y Chili",
    price: 59.9,
    image: "hamburguesas_03",
    categoryId: "hamburguesa"
  },
  {
    name: "Hamburguesa Queso y  Pepinos",
    price: 59.9,
    image: "hamburguesas_04",
    categoryId: "hamburguesa"
  },
  {
    name: "Hamburguesa Cuarto de Libra",
    price: 59.9,
    image: "hamburguesas_05",
    categoryId: "hamburguesa"
  },
  {
    name: "Hamburguesa Doble Queso",
    price: 69.9,
    image: "hamburguesas_06",
    categoryId: "hamburguesa"
  },
  {
    name: "Hot Dog Especial",
    price: 49.9,
    image: "hamburguesas_07",
    categoryId: "hamburguesa"
  },
  {
    name: "Paquete 2 Hot Dogs",
    price: 69.9,
    image: "hamburguesas_08",
    categoryId: "hamburguesa"
  },
  {
    name: "4 Rebanadas de Pay de Queso",
    price: 69.9,
    image: "pastel_01",
    categoryId: "pastel"
  },
  {
    name: "Waffle Especial",
    price: 49.9,
    image: "pastel_02",
    categoryId: "pastel"
  },
  {
    name: "Croissants De la casa",
    price: 39.9,
    image: "pastel_03",
    categoryId: "pastel"
  },
  {
    name: "Pay de Queso",
    price: 19.9,
    image: "pastel_04",
    categoryId: "pastel"
  },
  {
    name: "Pastel de Chocolate",
    price: 29.9,
    image: "pastel_05",
    categoryId: "pastel"
  },
  {
    name: "Rebanada Pastel de Chocolate",
    price: 29.9,
    image: "pastel_06",
    categoryId: "pastel"
  },
  {
    name: "Pizza Spicy con Doble Queso",
    price: 69.9,
    image: "pizzas_01",
    categoryId: "pizza"
  },
  {
    name: "Pizza Jamón y Queso",
    price: 69.9,
    image: "pizzas_02",
    categoryId: "pizza"
  },
  {
    name: "Pizza Doble Queso",
    price: 69.9,
    image: "pizzas_03",
    categoryId: "pizza"
  },
  {
    name: "Pizza Especial de la Casa",
    price: 69.9,
    image: "pizzas_04",
    categoryId: "pizza"
  },
  {
    name: "Pizza Chorizo",
    price: 69.9,
    image: "pizzas_05",
    categoryId: "pizza"
  },
  {
    name: "Pizza Hawaiana",
    price: 69.9,
    image: "pizzas_06",
    categoryId: "pizza"
  },
  {
    name: "Pizza Tocino",
    price: 69.9,
    image: "pizzas_07",
    categoryId: "pizza"
  },
  {
    name: "Pizza Vegetales y Queso",
    price: 69.9,
    image: "pizzas_08",
    categoryId: "pizza"
  },
  {
    name: "Pizza Pepperoni y Queso",
    price: 69.9,
    image: "pizzas_09",
    categoryId: "pizza"
  },
  {
    name: "Pizza Aceitunas y Queso",
    price: 69.9,
    image: "pizzas_10",
    categoryId: "pizza"
  },
  {
    name: "Pizza Queso, Jamón y Champiñones",
    price: 69.9,
    image: "pizzas_11",
    categoryId: "pizza"
  }
]