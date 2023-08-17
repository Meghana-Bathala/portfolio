
    function Chat() {
      const searchTerm = document.querySelector('.Chat-input').value.toLowerCase();
      const resultsList = document.getElementById('results-list2');
      const searchResults = document.getElementsByClassName('Chat-result');

      while (resultsList.firstChild) {
        resultsList.removeChild(resultsList.firstChild);
      }
      if (searchTerm.trim() !== '') {
        const dataArray = [
          'Hii hey',
          'How can i book a room in RK Resorts',
          'may i know the location',
          'How are you'
        ];

        let foundResults = false;

        dataArray.forEach((result) => {
          if (result.toLowerCase().includes(searchTerm)) {
            const li = document.createElement('p');
            li.className = 'search-result';
            if(result==dataArray[0]){
            li.textContent = 'Hii👋 I am here to help'}
            else if(result==dataArray[1]){
            li.textContent = 'Fill the form given in website or contact us through telephone number'}
            else if(result==dataArray[2]){
            li.textContent = 'It is near to idupulapaya,kadapa district'}
            else if(result==dataArray[3]){
              li.textContent = 'I am Good!...What about you'}
            resultsList.appendChild(li);
            foundResults = true;
          }
        });

        if (!foundResults) {
          const li = document.createElement('p');
          li.textContent = 'Sorry!😔....cannot get you.Contact us through 91XXXX';
          resultsList.appendChild(li);
        }
      }
    }
