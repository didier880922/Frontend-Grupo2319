const CATEGORY = new Category();

document.addEventListener("DOMContentLoaded", event => {

    function loadCategoryTable() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        CATEGORY.findAll().then(categories => {
            categories.forEach(category => {
                tbody.innerHTML += `
                    <tr>
                        <td>${category.id}</td>
                        <td>${category.name}</td>
                        <td>${category.description}</td>
                        <td>
                            <button type="button">Eliminar</button>
                        </td>
                    </tr>    
                `;
            });
        });
    };

    loadCategoryTable();

    document.querySelector("#category-insert").addEventListener("submit", event => {
        CATEGORY.insert({
            name: event.target.name.value,
            description: event.target.description.value,
        }).then(category => {
            event.target.reset();
            loadCategoryTable();
            alert('La categoria fue registrada exitosamente');
        }).catch(() => {
            alert('La categoria "' + category.name + '" fue registrada');
        });
    }, false);

}, false);