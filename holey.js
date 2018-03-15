const ARRAY_SIZE = 100000000;

const holeyArray = () => {
  const array = new Array(ARRAY_SIZE);

  // for (let index = 0; index < ARRAY_SIZE; index++) {
  //   array[index] = 1;
  // }
  for (let index = (ARRAY_SIZE/2); index < ARRAY_SIZE; index++) {
    array[index] = 1;
  }

  const startTime = new Date().getTime();
  loopAndDoSomething(array);
  const endTime = new Date().getTime();

  return (endTime - startTime) / 1000;
};

const doSomething = item => {
  return `${item}foo`;
};

const loopAndDoSomething = array => {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    doSomething(item);
  }
};

const start = () => {
  const holeyTime = holeyArray();
  console.log("Holey array time taken", `${holeyTime}s`);
};

start();