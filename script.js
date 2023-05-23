function updateClock() {
    const agora = new Date();
    const alvo = new Date('2023-12-31');
    const diferenca = alvo - agora;
  
    if (diferenca < 0) {
      document.getElementById('years').innerHTML = '00';
      document.getElementById('months').innerHTML = '00';
      document.getElementById('weeks').innerHTML = '00';
      document.getElementById('days').innerHTML = '00';
      document.getElementById('hours').innerHTML = '00';
      document.getElementById('minutes').innerHTML = '00';
      document.getElementById('seconds').innerHTML = '00';
    } else {
      const umAnoEmMillisegundos = 1000 * 60 * 60 * 24 * 365.25;
      const anos = Math.floor(diferenca / umAnoEmMillisegundos);
      const meses = Math.floor((diferenca % umAnoEmMillisegundos) / (1000 * 60 * 60 * 24 * 30.44));
      const semanas = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
      const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
      const padZeros = (num) => {
        return num.toString().padStart(2, '0');
      };
  
      document.getElementById('years').innerHTML = padZeros(anos);
      document.getElementById('months').innerHTML = padZeros(meses);
      document.getElementById('weeks').innerHTML = padZeros(semanas);
      document.getElementById('days').innerHTML = padZeros(dias);
      document.getElementById('hours').innerHTML = padZeros(horas);
      document.getElementById('minutes').innerHTML = padZeros(minutos);
      document.getElementById('seconds').innerHTML = padZeros(segundos);
    }
  }
  
  setInterval(updateClock, 1000);
  