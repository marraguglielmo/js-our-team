const output = document.querySelector('.output');


const members =[

    {
        nome : 'Wayne Bernett',
        ruolo : 'Founder & CEO',
        foto : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome : 'Angela caroll',
        ruolo : 'Chief Editor',
        foto : 'angela-caroll-chief-editor.jpg'
    },

    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        foto : 'walter-gordon-office-manager.jpg'
    },

    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        foto : 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        foto : 'scott-estrada-developer.jpg'
    },

    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        foto : 'barbara-ramos-graphic-designer.jpg'
    },
];

for(let member in members){
    output.innerHTML += `
    <div class="col">
    <div class="card">
        <div class="card-img">
            <img src="img/${members[member].foto}" alt="foto membro">
        </div>
        <div class="card-txt">
            <div class="member-name">${members[member].nome}</div>
            <div class="member-role">${members[member].ruolo}</div>
        </div>
    </div>
</div>
    `
}



