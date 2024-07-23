import { getAllPeople } from "./modules/app.js";
import { profile } from "./components/profile.js";

const search = document.querySelector("#input_search");
const main = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", async () => {
    const people = await getAllPeople();

    main.innerHTML = await profile(people);// Cargar personas por defecto

    search.addEventListener("input", async (event) => {
        const searchTerm = event.target.value.toLowerCase().trim(); // Obtener el valor del input y convertirlo a minusculas y sin espacios

        const filteredProfiles = people.filter((person) => {
            return person.name_full.toLowerCase().includes(searchTerm); //Comparar si el nombre de la persona incluye el término de búsqueda
        });

        if (filteredProfiles.length === 0) { // Si no se encuentran personas
            main.innerHTML = /*html*/ `<h2>No results found</h2>
                <style>.main{display: flex; justify-content: center; align-items: center; margin-top: 50px; color: rgb(13, 160, 106)}</style>`;
        } else{
            main.innerHTML = await profile(filteredProfiles);
        }
    });
})