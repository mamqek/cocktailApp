// import { writable } from "svelte/store"

// let { subscribe, set, update } = writable({
//     session : null,
//     user : null
// });

// // update = (key, val) => update(state => {
// //   const updatedState = { ...state };
// //   updatedState[key] = val;
// //   return updatedState;
// // });


// console.log("store created");
// export const sessionStore = {
//   subscribe,
//   set,
//   update,
//   isNull: () => {
//     let isNullValue = false;
//     const unsubscribe = subscribe(current => {
//         isNullValue = current.user === null && current.session === null;
//     })();
//     unsubscribe;
//     return isNullValue;
// }
// };

// export const getUser = () => {
// } 

// /** @param {Object} updates */
// export const updateStore = (updates) => {
//     sessionStore.update((current) => {
//         return { ...current, ...updates };
//     });
// };    