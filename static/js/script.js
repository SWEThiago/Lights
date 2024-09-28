document.addEventListener("DOMContentLoaded", function () {
    // Fazer a requisição para o backend para obter as luzes do painel
    fetch('/lights')
        .then(response => response.json())
        .then(data => {
            // Selecionar o container onde as luzes serão inseridas
            const container = document.getElementById('lights-container');

            // Iterar sobre cada luz e criar os elementos HTML necessários
            data.forEach(light => {
                // Criar um div para cada luz do painel
                const lightDiv = document.createElement('div');
                lightDiv.classList.add('light-item');

                // Criar um div para o conteúdo principal (ícone e nome)
                const mainContent = document.createElement('div');
                mainContent.classList.add('light-main-content');

                // Adicionar o ícone da luz
                const lightIcon = document.createElement('img');
                lightIcon.src = light.icon;
                lightIcon.alt = light.light_name;

                // Adicionar o nome da luz
                const lightName = document.createElement('h3');
                lightName.textContent = light.light_name;

                // Adicionar o ícone e o nome ao conteúdo principal
                mainContent.appendChild(lightIcon);
                mainContent.appendChild(lightName);

                // Adicionar o conteúdo principal ao div da luz
                lightDiv.appendChild(mainContent);

                // Criar uma div para as informações adicionais (inicialmente escondidas)
                const lightDetails = document.createElement('div');
                lightDetails.classList.add('light-details');
                lightDetails.style.display = 'none';

                // Adicionar descrição, causa e solução
                const lightDescription = document.createElement('p');
                lightDescription.innerHTML = `<strong>Descrição:</strong> ${light.description}`;

                const lightCause = document.createElement('p');
                lightCause.innerHTML = `<strong>Causa:</strong> ${light.cause}`;

                const lightSolution = document.createElement('p');
                lightSolution.innerHTML = `<strong>Solução:</strong> ${light.solution}`;

                lightDetails.appendChild(lightDescription);
                lightDetails.appendChild(lightCause);
                lightDetails.appendChild(lightSolution);

                // Adicionar as informações adicionais ao div da luz
                lightDiv.appendChild(lightDetails);

                // Adicionar evento de clique para mostrar/ocultar detalhes
                mainContent.addEventListener('click', function () {
                    lightDetails.style.display = lightDetails.style.display === 'none' ? 'block' : 'none';
                });

                // Adicionar o div ao container principal
                container.appendChild(lightDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os dados das luzes:', error);
        });
});
