const cars = [
    {
        id: 1,
        marca: 'Renault',
        modelo: 'Sandero',
        color: 'negro',
        año: 2021,
        precio: 41.500,
    },
    {
        id: 2,
        marca: 'Suzuki',
        modelo: 'Celerio',
        color: 'gris',
        año: 2020,
        precio: 37.170,
    },
    {
        id: 3,
        marca: 'Chevrolet',
        modelo: 'Beat',
        color: 'rojo',
        año: 2019,
        precio: 30.000,
    },
    {
        id: 4,
        marca: 'Kia',
        modelo: 'Picanto',
        color: 'blanco',
        año: 2018,
        precio: 35.500,
    },
    {
        id: 5,
        marca: 'Volkswagen',
        modelo: 'Gol',
        color: 'azul',
        año: 2020,
        precio: 39.490,
    }
];
function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
                    <td>${car.marca}</td>
                    <td>${car.modelo}</td>
                    <td>${car.color}</td>
                    <td>${car.año}</td>
                    <td>${car.precio}</td>

                    <td>
                        <button onclick="deleteCar(${car.id})" class="btn btn-warning">
                            Eliminar
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML= html;
}
function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id );
    cars.splice(index, 1);
    printCars();
}
function addCar() {
    const marca = document.getElementById('marca').value
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('modelo').value;
    const año = document.getElementById('modelo').value;
    const precio = document.getElementById('modelo').value;
    const id = cars[cars.length -1].id + 1;
    const newCar = {
        marca,
        modelo,
        color,
        año,
        precio,
        id
    }
    cars.push(newCar);
    printCars();
   
    document.getElementById('form-car').reset();
}
    printCars();