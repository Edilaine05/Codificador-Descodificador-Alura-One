document.addEventListener('DOMContentLoaded', function() {
    const inputTextArea = document.querySelector('.input-texto-area');
    const outputTextArea = document.querySelector('.input-texto-area1');
    const codificarButton = document.querySelector('.container-bottom .botao:nth-child(1)');
    const descodificarButton = document.querySelector('.container-bottom .botao:nth-child(2)');
    const copiarButton = document.getElementById('copiar');
    const limparButton = document.getElementById('limpar')
    
    
    codificarButton.addEventListener('click', function() {
      const textoOriginal = inputTextArea.value.toLowerCase();
      const textoCriptografado = criptografar(textoOriginal);
      outputTextArea.value = textoCriptografado;
      if(inputTextArea.value === ''){
        outputTextArea.style.backgroundImage = 'url(./SRC/Assets/logo/image.svg)';
        }else{    
        outputTextArea.style.backgroundImage = 'none';
        }
      inputTextArea.value = '';
      
    });
  
    descodificarButton.addEventListener('click', function() {
      const textoCriptografado = inputTextArea.value.toLowerCase();
      const textoDescriptografado = descriptografar(textoCriptografado);
      outputTextArea.value = textoDescriptografado;
      if(inputTextArea.value === ''){
        outputTextArea.style.backgroundImage = 'url(./SRC/Assets/logo/image.svg)';
        }else{    
        outputTextArea.style.backgroundImage = 'none';
        }
      inputTextArea.value = '';
      
    });
  
    copiarButton.addEventListener('click', function() {
      outputTextArea.select();
      navigator.clipboard.writeText(outputTextArea.value)
        .then(function() {
          alert('Texto copiado para a área de transferência!');
        })
        .catch(function(error) {
          console.error('Erro ao copiar texto:', error);
        });
    });
    limparButton.addEventListener('click', function() {
        outputTextArea.value = '';
        outputTextArea.style.backgroundImage = 'url(./SRC/Assets/logo/image.svg)';
      });
});
  
  
  function criptografar(texto) {
    let textoCriptografado = '';
    for (const letra of texto) {
      switch (letra) {
        case 'e':
          textoCriptografado += 'enter';
          break;
        case 'i':
          textoCriptografado += 'imes';
          break;
        case 'a':
          textoCriptografado += 'ai';
          break;
        case 'o':
          textoCriptografado += 'ober';
          break;
        case 'u':
          textoCriptografado += 'ufat';
          break;
        default:
          textoCriptografado += letra;
          break;
      }
    }
    return textoCriptografado;
  }
  
  function descriptografar(textoCriptografado) {
    let textoDescriptografado = '';
    let i = 0;
    while (i < textoCriptografado.length) {
      const letra = textoCriptografado[i];
      if (letra === 'e' && textoCriptografado.slice(i, i + 5) === 'enter') {
        textoDescriptografado += 'e';
        i += 4;
      } else if (letra === 'i' && textoCriptografado.slice(i, i + 4) === 'imes') {
        textoDescriptografado += 'i';
        i += 3;
      } else if (letra === 'a' && textoCriptografado.slice(i, i + 2) === 'ai') {
        textoDescriptografado += 'a';
        i += 1;
      } else if (letra === 'o' && textoCriptografado.slice(i, i + 4) === 'ober') {
        textoDescriptografado += 'o';
        i += 3;
      } else if (letra === 'u' && textoCriptografado.slice(i, i + 4) === 'ufat') {
        textoDescriptografado += 'u';
        i += 3;
      } else {
        textoDescriptografado += letra;
      }
      i++;
    }
    return textoDescriptografado;
  }
