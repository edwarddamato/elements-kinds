const ARRAY_SIZE = 100000000;

const packedArray = () => {
  const array = [];

  for (let index = 0; index < ARRAY_SIZE; index++) {
    array.push(1);
  }
  // array[ARRAY_SIZE/2] = void 0;
  // array[456] = "foo";
  // console.log(array[456]);

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
  const packedTime = packedArray();
  console.log("Packed array time taken", `${packedTime}s`);
};

start();