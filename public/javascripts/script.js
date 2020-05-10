var ctx = document.getElementById("myChart").getContext("2d");

// let columns = ["#", "Name", "Coordinates", "Timestamp", "Action"];

// let data = [
//   {
//     "#": 1,
//     Name: "iphone 1",
//     Coordinates: [12, 13],
//     Timestamp: "03/26/2020 11:21:38 AM",
//   },
//   {
//     "#": 2,
//     Name: "iphone 2",
//     Coordinates: [14, 12],
//     Timestamp: "04/03/2020 12:21:36 PM",
//   },
//   {
//     "#": 3,
//     Name: "iphone 3",
//     Coordinates: [10, 18],
//     Timestamp: "02/14/2020 11:04:03 AM",
//   },
// ];

// const generateTable = (data) => {
//   // columns
//   //   let header = document.querySelector(".columns");
//   //   columns.forEach((col) => {
//   //     let node = document.createElement("th");
//   //     var textnode = document.createTextNode(col);
//   //     node.appendChild(textnode);
//   //     node.scope = "col";
//   //     // search functionality
//   //     let searchInput = document.createElement("input");
//   //     searchInput.id = col;
//   //     searchInput.name = col;
//   //     searchInput.value = "";
//   //     searchInput.style.width = "100%";
//   //     node.appendChild(searchInput);
//   //     header.appendChild(node);
//   //   });
//   // rows
//   //   let tbody = document.querySelector("tbody");
//   //   data.forEach((d, index) => {
//   //     let tr = document.createElement("tr");
//   //     let col1 = document.createElement("td");
//   //     let col2 = document.createElement("td");
//   //     let col3 = document.createElement("td");
//   //     let col4 = document.createElement("td");
//   //     let col5 = document.createElement("td");
//   //     col1.innerHTML = d[columns[0]];
//   //     col2.innerHTML = d[columns[1]];
//   //     col3.innerHTML = d[columns[2]];
//   //     col4.innerHTML = d[columns[3]];
//   //     col5.innerHTML = `<button class="btn btn-dark" id="${d["#"]}">Populate</button>`;
//   //     col1.scope = "row";
//   //     tr.append(col1);
//   //     tr.append(col2);
//   //     tr.append(col3);
//   //     tr.append(col4);
//   //     tr.append(col5);
//   //     tbody.appendChild(tr);
//   //   });
// };

// generateTable(data);

const generatePlot = (x1, x2, x3, y1, y2, y3, x, y) => {
  var scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Station",
          backgroundColor: "#c11747",
          data: [
            {
              x: x1,
              y: y1,
            },
            {
              x: x2,
              y: y2,
            },
            {
              x: x3,
              y: y3,
            },
          ],
        },
        {
          label: "Mac",
          backgroundColor: "blue",
          data: [
            {
              x,
              y,
            },
          ],
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
          },
        ],
      },
    },
  });
};

generatePlot(9, 8, 2, 1, 7, 5, 0, 0);

let btn = document.querySelectorAll("button");

const plot = (e) => {
  let row = e.target.parentNode.parentNode;
  let cells = row.getElementsByTagName("td");
  let coordinatesInStringFormat = cells[3].innerHTML;
  let formattedCoordinates = coordinatesInStringFormat
    .replace(/\[/, "")
    .replace(/\]/, "")
    .split(",");
  generatePlot(
    9,
    8,
    2,
    1,
    7,
    5,
    formattedCoordinates[0],
    formattedCoordinates[1]
  );
};

btn.forEach((b) => {
  b.addEventListener("click", plot);
});

// const searchInputs = document.querySelectorAll("input");

// const handleChange = (e) => {
//   let event = e.target;
//   let value = event.value;

//   let table = document.querySelector("table");
//   let tr = table.getElementsByTagName("tr");

//   for (let i = 0; i < tr.length; i++) {
//     let td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       let txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(value.toUpperCase()) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// };

// searchInputs.forEach((input) => {
//   input.addEventListener("change", handleChange);
// });
