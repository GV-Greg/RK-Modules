<script setup>
  import AttempsList from '@/components/Attempts.vue';
  import { inject, reactive, ref } from 'vue'
  const swal = inject('$swal')

  const secret = ref([1, 2, 3, 4, 1])
  const numbersInSecret = ref({})
  const sum = (accumulator, curr) => accumulator + curr;
  // boucle servant à calculer combien de fois le chiffre est dans la combinaison secrète
  for(let i=0; i < secret.value.length; i++) {
    secret.value[i] in numbersInSecret.value ? numbersInSecret.value[secret.value[i]]++ : numbersInSecret.value[secret.value[i]] = 1
  }

  const attempts = ref([])

  const attempt = reactive({
    combination: '',
    points: null,
  })

  function isDisabled() {
    return attempt.combination.length !== 5
  }

  function isNum(value) {
    return /^\d+$/.test(value)
  }

  function submit() {
    let test = false;
    if(attempts.value.length > 0) {
      for(let i=0;i<attempts.value.length;i++) {
        if(attempt.combination === attempts.value[i][0]) {
          test = true
        }
      }
    }

    if(!isNum(attempt.combination)) {
      swal({
        icon: "error",
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: "Entrez que des chiffres !",
      });
    } else if(test === true) {
      swal({
        showConfirmButton: true,
        timer: 2000,
        timerProgressBar: true,
        icon: "info",
        title: "Combinaison déjà existante !",
      })
    } else {
      let element = checkPoints(attempt.combination)
      attempts.value.push(element)
      attempt.combination = []
      attempt.points = null
    }
  }

  function checkPoints(attempt) {
    let tab = attempt.split('')
    let points = []
    // objet checks sert à incrémenter à chaque passage le nombre de la combinaison afin de savoir combien de fois le nombre est dans la combinaison
    let checks = {}
    // établir un tableau qui vérifie si le chiffre est dans le nombre mystère.
    // Si c'est pas le cas, cela vaut 0 points.
    // Si c'est le cas et qu'il correspond au chiffre du même emplacement dans le nombre mystère, cela vaut 2 points
    // Si c'est le cas et qu'il ne correspond pas au chiffre du même emplacement, cela vaut temporairement null
    for(let i=0; i < tab.length; i++) {
      if(!secret.value.includes(Number(tab[i]))) {
        points[i] = 0
        // test si le chiffre est dans l'objet 'checks' : si oui, il incrémente. si non, il ajoute avec valeur 1
        tab[i] in checks ? checks[tab[i]]++ : checks[tab[i]] = 1
      } else if(Number(tab[i]) === secret.value[i]){
        points[i] = 2
        tab[i] in checks ? checks[tab[i]]++ : checks[tab[i]] = 1
      } else {
        points[i] = null
      }
    }
    console.log(checks)

    // Boucle qui va traiter les nombres qui valent null : vérifier si le nombre est à un autre emplacement dans le nombre mystère.
    for(let x=0; x < points.length; x++) {
      if(points[x] === null) {
        if(tab[x] in checks) {
          console.log(tab[x])
          checks[tab[x]] = 1
        }
      }
    }
    // if(tab[i] in checks && tab[i] in numbersInSecret.value && checks[Number(tab[i])] < numbersInSecret.value[Number(tab[i])]) {
    //   // test de vérification si le chiffre est dans les objets checks ou numbersInSecret
    //   // Et si le nombre de ce chiffre est plus petit que le nombre de fois où il se trouve dans la combinaison
    //   // Ex : j'ai 12131 en proposition et un chiffre mystère 12341, au passage du 2e 1 de la proposition, la vérification sera vrai
    //   // Car il y a un 2e 1 dans le chiffre mystère et au passage du 3e 1, la vérification est fausse car il y a que 2x 1 dans le chiffre mystère
    //   points[i] = 1
    // } else {
    console.log(points)
    let score = points.reduce(sum)
    return [attempt, score]
  }

  // const Toast = Swal.mixin({
  //     icon: 'success',
  //     toast: true,
  //     position: 'top-end',
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  // });
</script>

<template>
  <div class="module">
    <section>
      <div id="secret-number-container">
        <span>Chiffre mystère</span>
        <span id="secret-number">{{ secret.join('') }}</span>
      </div>
      <div id="attempts-list">
        <span>Liste des propositions</span>
        <AttempsList :attempts="attempts" />
      </div>
    </section>
    <section>
      <form @submit.prevent="submit">
        <label for="attempt">Entrez une combinaison de 5 chiffres :</label>
        <input id="attempt" type="text" maxlength="5" v-model="attempt.combination">
        <div id="errors">
          <p class="important-error" v-if="attempt.combination.length > 0 && !isNum(attempt.combination)">Entrez que des chiffres !</p>
          <p class="error" v-if="attempt.combination.length > 0 && attempt.combination.length < 5">Il faut entrer 5 chiffres.</p>
        </div>
        <button class="btn btn-green" :class="{'disabled' : isDisabled()}" type="submit" :disabled="isDisabled()">Entrer</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
  .module {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  section:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #attempts-list {
    margin-top: 10px;
  }

  #secret-number-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  #secret-number {
    color: #5fbe9e;
    font-weight: 600;
    font-size: 30px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form input {
    height: 40px;
    max-width: 23%;
    text-align: center;
    margin: 10px 0 5px 0;
    font-size: 26px;
  }

  #errors {
    margin-bottom: 15px;
    color: #ff0000;
    font-style: italic;
    line-height: 17px;
    text-align: center;
  }

  .important-error {
    margin-bottom: 3px;
    font-size: 20px;
    line-height: 23px;
  }

  .error {
    font-size: 14px;
    line-height: 17px;
  }

  .btn {
    margin: 0;
    width: 40%;
    height: 40px;
    font-size: 22px;
  }

  .disabled {
    cursor: initial;
    background-image: linear-gradient(#5fbe9e, #4e8f7a);
    border-color: hsl(160, 29%, 41%);
  }

  .disabled:hover {
    background-image: linear-gradient(#5fbe9e, #4e8f7a);
    border-color: hsl(160, 29%, 41%);
    color: #ffffff;
  }
</style>