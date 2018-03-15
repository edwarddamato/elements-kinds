


const array = [1, 2, 3];
// typeof 

const array = [1, 2, 3];
// elements kind: PACKED_SMI_ELEMENTS


array.push(4.56);
// elements kind: PACKED_DOUBLE_ELEMENTS

const array = [1, 2, 3];
// elements kind: PACKED_SMI_ELEMENTS
array.push(4.56);
// elements kind: PACKED_DOUBLE_ELEMENTS


array.push('x');
// elements kind: PACKED_ELEMENTS


const array = [1, 2, 3, 4.56, 'x'];
// elements kind: PACKED_ELEMENTS

array.length; // 5

array[9] = 1; // array[5] until array[8] are now holes
// elements kind: HOLEY_ELEMENTS