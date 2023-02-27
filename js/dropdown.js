let btn = document.getElementById('btn');
      
        btn.addEventListener('click', function(e) {
          let list = document.getElementById('list');
      
          if (list.style.display === 'none') {
            list.style.display = 'block';
          } else {
            list.style.display = 'none';
          }
      
        });  
        