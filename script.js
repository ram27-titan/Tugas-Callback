$.ajax({
  url: 'https://jsonplaceholder.typicode.com/users',
  success: (results) => {
    const dataUser = results;
    let tables = '';
    dataUser.forEach((m) => {
      tables += `<tr>
      <th scope="row">${m.id}</th>
      <td>${m.name}</td>
      <td>${m.username}</td>
      <td>${m.email}</td>
      <td>${m.address}</td>
      <td>${m.company}</td>
    </tr>`;
    });
    $('.table-container').html(tables);
  },
});
