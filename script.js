$.ajax({
  url: 'https://jsonplaceholder.typicode.com/users',
  success: (results) => {
    const dataUser = results;
    const street = dataUser[0].address.street;
    const suite = dataUser[1].address.suite;
    const city = dataUser[2].address.city;
    const name = dataUser[0].company.name;
    let tables = '';
    dataUser.forEach((m) => {
      tables += `<tr>
      <th scope="row">${m.id}</th>
      <td>${m.name}</td>
      <td>${m.username}</td>
      <td>${m.email}</td>
      <td>${m.address.street}, ${m.address.suite}, ${m.address.city}</td>
      <td>${m.company.name}</td>
    </tr>`;
    });
    $('.table-container').html(tables);
  },
});
