var ctx = document.getElementById("myChart").getContext("2d");

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

let x1 = document.getElementById("x1").innerHTML;
let x2 = document.getElementById("x2").innerHTML;
let x3 = document.getElementById("x3").innerHTML;
let y1 = document.getElementById("y1").innerHTML;
let y2 = document.getElementById("y2").innerHTML;
let y3 = document.getElementById("y3").innerHTML;

generatePlot(x1, x2, x3, y1, y2, y3, 0, 0);

let btn = document.querySelectorAll("button");

const plot = async (e) => {
  let row = await e.target.parentNode.parentNode;
  let cells = await row.getElementsByTagName("td");
  let coordinatesInStringFormat = await cells[3].innerHTML;
  let formattedCoordinates = await coordinatesInStringFormat
    .replace(/\[/, "")
    .replace(/\]/, "")
    .split(",");
  generatePlot(
    x1,
    x2,
    x3,
    y1,
    y2,
    y3,
    formattedCoordinates[0],
    formattedCoordinates[1]
  );
  // scroll to top
  window.scrollTo(0, 0);
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
