// Exemplo de envio de feedback
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const feedback = {
      user: document.querySelector('#user').value,
      message: document.querySelector('#message').value,
    };
    
    const response = await fetch('/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback),
    });
  
    if (response.ok) {
      console.log('Feedback enviado!');
    } else {
      console.error('Erro ao enviar feedback');
    }
  });
  