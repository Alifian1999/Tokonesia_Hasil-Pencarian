const containerHasilPencarian = document.getElementById('container-content-result')  
const containerListKategori = document.getElementById('container-kategori-top')
const allButton = document.getElementById('container-kategori-top').getElementsByTagName('button')


const renderKategoriList = () =>{
    fetch('./data.json')
        .then(res => res.json())
        .then(res =>{
            let listKategoriData = res.list_kategori
            for(let i = 0; i<listKategoriData.length; i++){
                containerListKategori.innerHTML +=`
                <button onclick="handleHasilPencarian(id)" id="${listKategoriData[i].id}">
                    <img src="${listKategoriData[i].image}" alt="">
                    <p>${listKategoriData[i].kategori}</p>
                </button>
                `
            }
        })
        .catch(err => console.log(err))
}
renderKategoriList()


const handleHasilPencarian = (types) =>{
    const clickedButton = document.getElementById(`${types}`)
    for(let i=0; i<allButton.length;i++){
        allButton[i].style.backgroundColor = 'white'
    }
    containerHasilPencarian.innerHTML = null

    fetch('./data.json')
        .then(res => res.json())
        .then(res =>{ 
            const data = res.type[types]
            for(let i = 0; i<data.length; i++){
                clickedButton.style.backgroundColor = '#FEC14E'
                containerHasilPencarian.innerHTML += ` 
                    <div onclick="coba(className)" id="hasilPencarian" >
                        <div class="title-accordion">
                            <p>${data[i].text}</p>
                            <img src="${data[i].image}" alt="">
                        </div>
                        <div class="accordion">
                            
                        </div>
                    </div>  
                `
            }
        })
        .catch(err => console.log(err))
}

function coba (props){
    console.log(props);
}
