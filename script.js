const ipiKey = "563492ad6f91700001000001d5a14c6388f14914aac7c2f36e96ae25";

const btnPrimary = document.querySelector(".btn-primary");
const btnSecundary = document.querySelector(".btn-secondary ");
const mainRow = document.querySelector(".main-row");

console.log(mainRow);

const displayHTM = (datas) => {
  datas.forEach((data) => {
    // const img {medium  } = data.url

    // console.log(data);
    console.log(data.src.medium);
    // console.log(data.src);

    const html = `
    
    <div class="col-md-4 ">
    <div class="card mb-4 shadow-sm">
      <img src="${data.src.tiny}" class="card-img-top img-fluid w-100" ' ' alt="...">
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
    
    `;
    mainRow.insertAdjacentHTML("afterbegin", html);
  });

  // mainRow.insertAdjacentHTML('afterbegin',html )
};

const getFectData = function (category) {
  // const element = category === 'Ocean' ? 'Ocean' : 'Tigers'

  fetch(`https://api.pexels.com/v1/search?query=${category}`, {
    method: "GET",
    headers: {
      Authorization: ipiKey,
    },
  })
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      console.log(data.photos);

      if (category == "Ocean")
        btnPrimary.addEventListener("click", () => {
          displayHTM(data.photos);
        });
      else
        btnSecundary.addEventListener("click", () => {
          displayHTM(data.photos);
        });
    });
};

//

getFectData("Ocean");
getFectData("Tigers");

// When pressing on Load Images button, load the pictures from https://api.pexels.com/v1/search?query=[your-query]
