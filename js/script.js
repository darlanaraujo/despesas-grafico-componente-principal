const valor = document.querySelectorAll('.valor');
const dia = document.querySelectorAll('.dia');
const coluna = document.querySelectorAll('.coluna');

function initValor() {
    
    coluna.forEach((item, index) => {

      item.addEventListener('click', () => {
        valor[index].classList.toggle('click');
      });
      
      item.addEventListener('mouseenter', () => {
          valor[index].classList.add('active');
      });
  
      item.addEventListener('mouseout', () => {
          valor[index].classList.remove('active');
      });

        
    });
}
initValor();

// ================================================================

let jsonDados = [{"day": "mon", "amount": 17.45}, {"day": "tue", "amount": 34.91}, {"day": "wed", "amount": 52.36},
    {"day": "thu", "amount": 31.07}, {"day": "fri", "amount": 23.39}, {"day": "sat", "amount": 43.28}, {"day": "sun", "amount": 25.48}]
    
// =====================================================================
function initGrafico() {

    jsonDados.forEach((item, index) => {
        valor[index].innerText = item.amount;
        dia[index].innerHTML = item.day;
        coluna[index].style.height = `${item.amount * 3}px`;
    
        coluna.forEach((item) => {
          item.classList.remove('active');
        });
    
        coluna[calendario() -1].classList.add('active');
    });
    
    function calendario() {
      let data = new Date();
      let diaSemana = data.getDay();
    
      return diaSemana;
    }
}
initGrafico();