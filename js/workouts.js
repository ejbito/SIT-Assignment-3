const Workouts = {
    data() {
      return {
        category: '',
        images: [
          { index: 1,
            src: "https://st.depositphotos.com/2389277/4385/i/600/depositphotos_43859575-stock-photo-man-doing-dumbbell-incline-bench.jpg",
            category: "Chest",
            name: "Inclined Dumbbell Press"
          },
          { index: 2,
            src: "https://media.istockphoto.com/photos/man-during-bench-press-exercise-picture-id1028273740?k=20&m=1028273740&s=612x612&w=0&h=LLXVWZUACcDpt_O9M2_1Gc9v-Yxa9slXR_ex0fKCbFY=",
            category: "Chest",
            name: "Barbell Bench Press"
          },
          { index: 3,
            src: "https://cdn.muscleandstrength.com/sites/default/files/seated-arnold-press-thumb.jpg",
            category: "Shoulders",
            name: "Arnold Press"
          },
          { index: 4,
            src: "https://www.muscleandperformance.com/wp-content/uploads/2014/01/image-placeholder-title-1.jpg?width=730",
            category: "Shoulders",
            name: "Shoulder Press"
          },
          { index: 5,
            src: "https://media.istockphoto.com/photos/working-on-his-biceps-picture-id1305421105?k=20&m=1305421105&s=612x612&w=0&h=uIFobDeVyi2VNTl7ImHcb0fpYMSDweH45tkMomy5leo=",
            category: "Biceps",
            name: "Bicep Curls"
          },
          { index: 6,
            src: "https://st2.depositphotos.com/32740318/50121/i/600/depositphotos_501217734-stock-photo-fit-man-sweatshirt-does-standing.jpg",
            category: "Biceps",
            name: "Hammer Curls"
          },
          { index: 7,
            src: "https://fitnessvolt.com/wp-content/uploads/2019/04/vb5ohsj3eme.jpg",
            category: "Triceps",
            name: "Tricep Pushdowns"
          },
          { index: 8,
            src: "https://i.ytimg.com/vi/MO_03opCc0g/maxresdefault.jpg",
            category: "Triceps",
            name: "Lying Tricep Extensions"
          },
          { index: 9,
            src: "https://cdn.muscleandstrength.com/sites/default/files/leg-press.jpg",
            category: "Quads",
            name: "Leg Press"
          },
          { index: 10,
            src: "https://www.mensjournal.com/wp-content/uploads/mf/1280-squat-barbell-james-michelfelder_0.jpg?quality=86&strip=all",
            category: "Quads",
            name: "Squat"
          },
          { index: 11,
            src: "https://cdn.muscleandstrength.com/sites/default/files/romanian-deadlift.jpg",
            category: "Hamstrings",
            name: "Romania Deadlifts"
          },
          { index: 12,
            src: "https://www.bodybuilding.com/images/2016/september/leg-curls-done-light-facebook-v2-960x540.jpg",
            category: "Hamstrings",
            name: "Hamstring Curls"
          },
          { index: 13,
            src: "https://cdn.muscleandstrength.com/sites/default/files/seated-calf-raise-1.jpg",
            category: "Calves",
            name: "Seated Calf Raises"
          },
          { index: 14,
            src: "https://i.ytimg.com/vi/GAQ-oohMhog/maxresdefault.jpg",
            category: "Calves",
            name: "Standing Calf Raises"
          },
        ]
      };
    },
    computed: {
      filterByCategory: function () {
        return this.images.filter(
          (image) => !image.category.indexOf(this.category)
        );
      }
    }
  };
  Vue.createApp(Workouts).mount("#app");