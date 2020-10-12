// window.addEventListener('load', () => {
//     const f = document.getElementById('file1');
//     f.addEventListener('change', evt => {
//       let input = evt.target;
//       if (input.files.length == 0) {
//         console.log('No file selected');
//         return;
//       }
//       const file = input.files[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         const object = document.getElementById('objects');
//         object.setAttribute("data",reader.result);
    
        
        
//         // object.innerHTML = reader.result;
//       };
  
//       reader.readAsDataURL(file);
//     });
//   });
  

window.addEventListener('load', () => {
  const f = document.getElementById('file1');
  f.addEventListener('change', evt => {
    let input = evt.target;
    if (input.files.length == 0) {
      console.log('No file selected');
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const object = document.getElementById('objects');
      object.setAttribute("data",reader.result);
  
      
      
      // object.innerHTML = reader.result;
    };

    reader.readAsDataURL(file);
  });
});

