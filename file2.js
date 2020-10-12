window.addEventListener('load', () => {
    const f = document.getElementById('file2');
    f.addEventListener('change', evt => {
      let input = evt.target;
      if (input.files.length == 0) {
        console.log('No file selected');
        return;
      }
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const object = document.getElementById('objects2');
        object.setAttribute("data",reader.result);

        // object.innerHTML = reader.result;
      };
      reader.readAsDataURL(file);
    });
  });


