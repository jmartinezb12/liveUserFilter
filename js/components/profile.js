export const profile = async (objData) => {
    return objData.map((person) => {
        return `
        <div class="person__profile">
            <img src="${person.avatar}" alt="img">
            <div class="profile__info">
                <h2>${person.name_full}</h2>
                <p>${person.description}</p>
            </div>
        </div>
        <hr>
        `;
    }).join('');
};