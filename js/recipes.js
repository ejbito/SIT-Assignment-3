const Recipes = {
    data() {
      return {
        recipes: '',
        images: [
          { index: 1,
            src: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/Protein-pancakes-b64bd40.jpg?resize=768,574",
            recipes: "Breakfast",
            name: "Protein Pancakes"
          },
          { index: 2,
            src: "https://www.acouplecooks.com/wp-content/uploads/2021/01/Peanut-Butter-Oatmeal-018s.jpg",
            recipes: "Breakfast",
            name: "Peanut Butter and Oats"
          },
          { index: 3,
            src: "https://recipetineats.com/wp-content/uploads/2019/07/Salmon-Salad_1.jpg",
            recipes: "Lunch",
            name: "Fresh Salmon Salad"
          },
          { index: 4,
            src: "https://i2.wp.com/reluctantentertainer.com/wp-content/uploads/2017/03/S7.jpg",
            recipes: "Lunch",
            name: "Shrimp and Leek Spaghetti"
          },
          { index: 5,
            src: "https://thehappypear.ie/wp-content/uploads/2021/09/IMG_4780-scaled.jpg",
            recipes: "Dinner",
            name: "Poke Bowl"
          },
          { index: 6,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96PC5_N2G2nD3_c-ENRMlcrQXYK-5TNDkzMgVcfv4ydQM1q-eukmGi4Jve3PK1fcYxfI&usqp=CAU",
            recipes: "Dinner",
            name: "Chicken and Rice"
          },
        ]
      };
    },
    computed: {
      filterByCategory: function () {
        return this.images.filter(
          (image) => !image.recipes.indexOf(this.recipes)
        );
      }
    }
  };
  Vue.createApp(Recipes).mount("#recipes");

  var recipes = new Vue ({
    el: '#recipes',
    data: {
        checkedNames: [],
    },
 });