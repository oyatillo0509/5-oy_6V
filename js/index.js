document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const f_name = document.getElementById("firstName").value;
  const l_name = document.getElementById("lastName").value;
  const p_num = document.getElementById("mobileNumber").value;
  const email = document.getElementById("email").value;
  const table = document

    .getElementById("t_table")
    .getElementsByTagName("tbody")[0];
  const new_t = table.insertRow();

  new_t.insertCell(0).appendChild(document.createTextNode(f_name));
  new_t.insertCell(1).appendChild(document.createTextNode(l_name));
  new_t.insertCell(2).appendChild(document.createTextNode(p_num));
  new_t.insertCell(3).appendChild(document.createTextNode(email));
});
