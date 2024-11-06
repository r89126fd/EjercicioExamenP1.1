function calculate() {
          let product1 = parseFloat(document.getElementById("product1").value) || 0;
          let product2 = parseFloat(document.getElementById("product2").value) || 0;
          let product3 = parseFloat(document.getElementById("product3").value) || 0;
          let product4 = parseFloat(document.getElementById("product4").value) || 0;
          let product5 = parseFloat(document.getElementById("product5").value) || 0;
      
          if (isNaN(product1) || isNaN(product2) || isNaN(product3) || isNaN(product4) || isNaN(product5)) {
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Por favor, ingrese solo números válidos en todos los campos.'
              });
              return;
          }
      
          let subtotal = product1 + product2 + product3 + product4 + product5;
          let discount = 0;
          let discountLabel = "Descuento 0%";
      
          if (subtotal >= 1000 && subtotal < 5000) {
              discount = 0.1 * subtotal;
              discountLabel = "Descuento 10%";
          } else if (subtotal >= 5000 && subtotal < 9000) {
              discount = 0.2 * subtotal;
              discountLabel = "Descuento 20%";
          } else if (subtotal >= 9000 && subtotal < 13000) {
              discount = 0.3 * subtotal;
              discountLabel = "Descuento 30%";
          } else if (subtotal >= 13000) {
              discount = 0.4 * subtotal;
              discountLabel = "Descuento 40%";
          }
      
          let total = subtotal - discount;
      
          document.getElementById("subtotal").value = subtotal.toFixed(2);
          document.getElementById("discount").value = discount.toFixed(2);
          document.getElementById("discountLabel").innerText = discountLabel;
          document.getElementById("total").value = total.toFixed(2);
      }
      