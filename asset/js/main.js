document.addEventListener('DOMContentLoaded', () => {

  const urlXLSX = '/asset/data/data.xlsx';

  fetch(urlXLSX)
    .then(response => response.arrayBuffer())
    .then(data => {
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const lines = XLSX.utils.sheet_to_json(sheet);

      let html = '';

      lines.forEach(line => {

        const name = line.nome || '';
        const bio = line.bio || '';
        const image = line.imagem || '';

        html += `
          <div class="bloco">
          <h1>${name}</h1>
          <img src="/asset/img/${image}" alt="${name}">
          <p>${bio}</p>
        </div>
    `
      })
      document.body.innerHTML = html
    });


});