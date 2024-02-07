fetch('./assets/app/config.json')
    .then(response => response.json())
    .then(data => {
        // Seção 1
        const section1 = data.sections[0];
        document.getElementById('section1Title').innerText = section1.title;
        document.getElementById('section1Subtitle').innerText = section1.subtitle;
        document.getElementById('section1Button').style.backgroundColor = section1.buttonColor;
        document.getElementById('section1ButtonIcon').classList.add(`fa-${section1.buttonIcon}`);
        document.getElementById('section1ButtonText').innerText = section1.buttonText;
        document.getElementById('section1Image').src = section1.imagePath;

        // Seção 2
        const section2 = data.sections[1];
        document.getElementById('section2Title').innerText = section2.title;
        document.getElementById('section2Subtitle').innerText = section2.subtitle;
        document.getElementById('section2FeatureTitle1').innerText = section2.featureTitle1;
        document.getElementById('section2Image').src = section2.imagePath;
        // Adicione mais informações conforme necessário
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));