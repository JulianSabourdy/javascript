const currentUser = 50;

function Personne(nom, age, sexe, taille, poids, pratique, description) {
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
    this.taille = taille;
    this.poids = poids;
    this.pratique = pratique;
    this.description = description;
  }

  async function getTodosAsync () {
    try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
          if (response.ok) {
              const jsonData = await response.json();
              // create DOM
                const container = document.getElementById("myList");
                const titleElem = document.createElement("h1");
                const numberElem = document.createElement("p");
                const descElem = document.createElement("p");
                const node = document.createElement("div");
                const User = []; // objet with global userObjet

              jsonData.forEach((element) => {
                const personne = new Personne(element.id, "29", "homme", "180", "88", "VTT", element.title);
                if (element.id === currentUser && personne.nom !== undefined) {
                  const numberNode = document.createTextNode(personne.nom);
                  const titleNode = document.createTextNode(personne.pratique);
                  const descNode = document.createTextNode(personne.description);
                  titleElem.appendChild(numberNode);
                  numberElem.appendChild(titleNode);
                  descElem.appendChild(descNode);
                  node.appendChild(titleElem);
                  node.appendChild(numberElem);
                  node.appendChild(descElem);
                  container.appendChild(node);
                } else {
                  User.push(personne);
                }
              });
              console.log(User);
          } else {
              console.error('server response : ' + response.status);
          }
      } catch (error) {
          console.error('Promise response : ' +  error);
      }
}

getTodosAsync();
  