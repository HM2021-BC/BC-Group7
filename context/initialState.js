const initialState = {
  errorMessage: "",
  petList: [
    {
      address: 0,
      owner: "Alex",
      name: "Potato",
      life: 75,
      isMale: true,
      lastTimeFed: 1625555099515 - 25 * 3600 * 1000,
    },
    {
      address: 1,
      owner: "Alex",
      name: "Tomato",
      life: 75,
      isMale: false,
      lastTimeFed: 1625641734434,
    },
    {
      address: 2,
      owner: "Alex",
      name: "Cucumber",
      life: 75,
      isMale: true,
      lastTimeFed: 1625641734434,
    },
    {
      address: 3,
      owner: "Alex",
      name: "Eggplant",
      life: 75,
      isMale: true,
      lastTimeFed: 1625641734434,
    },
    {
      address: 4,
      owner: "Alex",
      name: "Banana",
      life: 75,
      isMale: true,
      lastTimeFed: 1625641734434,
    },
    {
      address: 5,
      owner: "Alex",
      name: "Strawberry",
      life: 75,
      isMale: false,
      lastTimeFed: 1625641734434,
    },
    {
      address: 6,
      owner: "Alex",
      name: "Egg",
      life: 75,
      isMale: false,
      lastTimeFed: 1625641734434,
    },
  ],
};

export default initialState;
